const express = require("express");
const db = require("./database"); // Initializes the database

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

/* -------------------- GET ALL TASKS -------------------- */

app.get("/tasks", (req, res) => {
    const tasks = db.prepare("SELECT * FROM tasks").all();

    const formattedTasks = tasks.map(task => ({
        id: task.id,
        title: task.title,
        done: Boolean(task.done)
    }));

    res.status(200).json(formattedTasks);
});

/* -------------------- GET TASK BY ID -------------------- */

app.get("/tasks/:id", (req, res) => {

    const id = req.params.id;

    const task = db
        .prepare("SELECT * FROM tasks WHERE id = ?")
        .get(id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    task.done = Boolean(task.done);

    res.status(200).json(task);
});

/* -------------------- CREATE TASK -------------------- */

app.post("/tasks", (req, res) => {

    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    const result = db.prepare(
        "INSERT INTO tasks(title, done) VALUES (?, ?)"
    ).run(title, 0);

    const newTask = db.prepare(
        "SELECT * FROM tasks WHERE id = ?"
    ).get(result.lastInsertRowid);

    newTask.done = Boolean(newTask.done);

    res.status(201).json(newTask);
});

/* -------------------- UPDATE TASK -------------------- */

app.put("/tasks/:id", (req, res) => {

    const id = req.params.id;
    const { title, done } = req.body;

    if (!title || typeof done !== "boolean") {
        return res.status(400).json({
            error: "Title and done are required"
        });
    }

    const result = db.prepare(`
        UPDATE tasks
        SET title = ?, done = ?
        WHERE id = ?
    `).run(title, done ? 1 : 0, id);

    if (result.changes === 0) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    const updatedTask = db.prepare(
        "SELECT * FROM tasks WHERE id = ?"
    ).get(id);

    updatedTask.done = Boolean(updatedTask.done);

    res.status(200).json(updatedTask);
});

/* -------------------- DELETE TASK -------------------- */

app.delete("/tasks/:id", (req, res) => {

    const id = req.params.id;

    const result = db.prepare(
        "DELETE FROM tasks WHERE id = ?"
    ).run(id);

    if (result.changes === 0) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    res.sendStatus(204);
});

/* -------------------- START SERVER -------------------- */

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});

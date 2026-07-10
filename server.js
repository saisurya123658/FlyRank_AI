const express = require("express");
require("dotenv").config();

const repository = require("./repository/postgresRepository");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend running"
    });
});

app.get("/users", async (req, res) => {
    const users = await repository.getAllUsers();
    res.json(users);
});

app.post("/users", async (req, res) => {

    const user = await repository.createUser(
        req.body.name,
        req.body.role
    );

    res.json(user);
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});
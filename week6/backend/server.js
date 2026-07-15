require("dotenv").config();

const express = require("express");

const { v4: uuid } = require("uuid");

const aiQueue = require("./queue");

const jobs = require("./jobs");

const app = express();

app.use(express.json());

app.post("/generate", async (req, res) => {

    const id = uuid();

    jobs[id] = {
        status: "pending",
        result: null
    };

    await aiQueue.add(
        "generate",
        {
            id,
            prompt: req.body.prompt
        },
        {
            attempts: 3
        }
    );

    res.status(202).json({
        jobId: id,
        status: "pending"
    });

});

app.get("/status/:id", (req, res) => {

    const job = jobs[req.params.id];

    if (!job)
        return res.status(404).json({
            error: "Job not found"
        });

    res.json(job);

});

app.listen(3000, () => {
    console.log("Server started");
});

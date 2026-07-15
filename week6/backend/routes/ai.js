const express = require("express");
const { v4: uuid } = require("uuid");

const aiQueue = require("../queue");
const jobs = require("../jobs");

const router = express.Router();

// POST /ai/generate
router.post("/generate", async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({
            error: "Prompt is required"
        });
    }

    const jobId = uuid();

    jobs[jobId] = {
        status: "pending",
        result: null
    };

    await aiQueue.add(
        "generate",
        {
            id: jobId,
            prompt
        },
        {
            attempts: 3,
            backoff: {
                type: "exponential",
                delay: 2000
            }
        }
    );

    res.status(202).json({
        message: "Job accepted",
        jobId,
        status: "pending"
    });
});

// GET /ai/status/:id
router.get("/status/:id", (req, res) => {
    const job = jobs[req.params.id];

    if (!job) {
        return res.status(404).json({
            error: "Job not found"
        });
    }

    res.json(job);
});

module.exports = router;

const express = require("express");

const router = express.Router();

router.get("/message", (req, res) => {
    res.json({
        success: true,
        message: "Hello from Express API!"
    });
});

router.get("/student", (req, res) => {
    res.json({
        name: "Sai Surya",
        track: "Backend AI Engineering",
        assignment: "JavaScript 101"
    });
});

router.post("/feedback", (req, res) => {

    const { name, feedback } = req.body;

    res.json({
        success: true,
        name,
        feedback,
        message: "Feedback received successfully!"
    });

});

module.exports = router;

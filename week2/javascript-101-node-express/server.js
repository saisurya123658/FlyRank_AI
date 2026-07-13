const express = require("express");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to JavaScript 101 Backend Assignment!");
});

// API Routes
app.use("/api", apiRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

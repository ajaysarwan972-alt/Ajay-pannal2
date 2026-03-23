const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files serve karega (HTML, CSS, JS)
app.use(express.static(__dirname));

// Default route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Test route (optional)
app.get("/test", (req, res) => {
    res.send("Server chal raha hai 🚀");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});

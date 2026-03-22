const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Serve all static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Default route → open index.html
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});

Le jo add krna he kr le pr servay kharab na kario

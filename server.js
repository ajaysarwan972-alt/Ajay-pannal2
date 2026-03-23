const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static(__dirname));

// 🔐 BASEROW CONFIG
const TOKEN = "3S3iB1eHvIZwRS163mml32fuZhQ5heQf";
const TABLE_ID = "897341";

// ✅ GET USER
app.post("/get-user", async (req, res) => {
    const { mobile } = req.body;

    try {
        const response = await fetch(
            `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true&filter__mobile__equal=${mobile}`,
            {
                headers: { Authorization: `Token ${TOKEN}` }
            }
        );

        const data = await response.json();
        res.json(data.results[0]);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ UPDATE BALANCE
app.post("/update-balance", async (req, res) => {
    const { id, balance } = req.body;

    try {
        const response = await fetch(
            `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/${id}/?user_field_names=true`,
            {
                method: "PATCH",
                headers: {
                    "Authorization": `Token ${TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ balance })
            }
        );

        const data = await response.json();
        res.json(data);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DEFAULT PAGE
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});

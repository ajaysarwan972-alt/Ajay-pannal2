const express = require("express");
const cors = require("cors");

const app = express();

// 🔥 IMPORTANT
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
    res.send("Server Running ✅");
});

// 🔥 UPDATE BALANCE
app.post("/update-balance", (req, res) => {
    console.log("DATA AAYA:", req.body);
    res.json({ success: true });
});

// 🔥 GET USER (dummy)
app.post("/get-user", (req, res) => {
    res.json({ balance: 1000 });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

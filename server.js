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
let users = {
    "ajay": 1
};

app.post("/update-balance", (req, res) => {
    const { user, total } = req.body;

    if (!users[user]) {
        return res.json({ success: false, message: "User not found" });
    }

    if (users[user] <= 0) {
        return res.json({ success: false, message: "Low balance" });
    }

    users[user] -= total;

    res.json({
        success: true,
        balance: users[user]
    });
});
// 🔥 GET USER (dummy)
app.post("/get-user", (req, res) => {
    res.json({ balance: 1000 });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

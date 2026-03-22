const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static(__dirname));

// Temporary storage (later DB)
let users = [];

// SIGNUP API
app.post("/signup", (req, res) => {
  const { mobile, password } = req.body;

  let exist = users.find(u => u.mobile === mobile);
  if (exist) {
    return res.json({ success: false, message: "User already exists" });
  }

  users.push({ mobile, password });
  res.json({ success: true, message: "Signup successful" });
});

// LOGIN API
app.post("/login", (req, res) => {
  const { mobile, password } = req.body;

  let user = users.find(u => u.mobile === mobile && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("Server running...");
});

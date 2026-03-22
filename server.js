const express = require("express");
const app = express();
const PORT = 10000;

app.use(express.json());

// ✅ Allowed users (sirf ye 10 login kar sakte hain)
const users = [
  { mobile: "7357871944", password: "1234" },
  { mobile: "8901239533", password: "1234" },
  { mobile: "9999999999", password: "1234" },
  { mobile: "8888888888", password: "1234" },
  { mobile: "7777777777", password: "1234" },
  { mobile: "6666666666", password: "1234" },
  { mobile: "5555555555", password: "1234" },
  { mobile: "4444444444", password: "1234" },
  { mobile: "3333333333", password: "1234" },
  { mobile: "2222222222", password: "1234" }
];

// ✅ Login API
app.post("/login", (req, res) => {
  const { mobile, password } = req.body;

  const user = users.find(
    u => u.mobile === mobile && u.password === password
  );

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});

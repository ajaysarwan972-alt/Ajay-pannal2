document.write(`
<div class="header">
  <div id="menuBtn" onclick="toggleMenu()">☰</div>
  <div id="userId">ID: 0000</div>
  <div id="wallet">₹ 0</div>
</div>

<div class="menu" id="menu">
  <div onclick="location.href='index.html'">Home</div>
  <div onclick="location.href='history.html'">History</div>
  <div onclick="logout()">Logout</div>
</div>
`);

function toggleMenu(){
  let m = document.getElementById("menu");
  m.style.display = m.style.display === "flex" ? "none" : "flex";
}

function logout(){
  localStorage.removeItem("user");
  location.href="index.html";
}

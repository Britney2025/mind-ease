const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

function toggleSidebar() {
    sidebar.classList.toggle("open");
    hamburger.style.display = sidebar.classList.contains("open") ? "none" : "block";
}
// const sidebar = document.getElementById("sidebar");
// const hamburger = document.getElementById("hamburger");

// function toggleSidebar() {
//     sidebar.classList.toggle("open");
//     hamburger.style.display = sidebar.classList.contains("open") ? "none" : "block";
// }

const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
function openSidebar() {
    sidebar.classList.add("open");
    hamburger.style.display = "none";
}
function closeSidebar() {
    sidebar.classList.remove("open");
    hamburger.style.display = "block";
}
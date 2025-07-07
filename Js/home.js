function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}
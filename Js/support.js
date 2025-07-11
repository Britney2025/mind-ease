const affirmations = [
    "You are enough.",
    "You are doing your best, and that is enough.",
    "It's okay to rest.",
    "You are safe in this moment.",
    "Your feelings are valid.",
    "You have survived 100% of your hardest days.",
    "You are allowed to grow at your own pace.",
    "You bring value to the world simply by being you!"
];

let currentIndex = 0;
const textEl = document.getElementById("affirmationText");

function showNextAffirmation() {
    textEl.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % affirmations.length;
        textEl.textContent = affirmations[currentIndex];
        textEl.style.opacity = 1;
    }, 500);
}

setInterval(showNextAffirmation, 5000);

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
// const sidebar = document.getElementById("sidebar");
// const hamburger = document.getElementById("hamburger");

// function toggleSidebar() {
//     sidebar.classList.toggle("open");
//     hamburger.style.display = sidebar.classList.contains("open") ? "none" : "block";
// }

// function toggleSidebar() {
//     const sidebar = document.getElementById("sidebar");
//     sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
// }

// function closeSidebar() {
//     document.getElementById("sidebar").style.width = "0";
// }
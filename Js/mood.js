const moods = document.querySelectorAll('.mood');

moods.forEach(button => {
    button.addEventListener('click', () => {
        const selectedMood = button.getAttribute('data-mood');
        localStorage.setItem('userMood', selectedMood);
        window.location.href = 'mood.html';
    });
});

const mood = localStorage.getItem("userMood");

const moodEmojis = {
    happy: "😀",
    sad: "😥",
    angry: "😠",
    anxious: "😰",
    calm: "🙂"
};

const affirmations = {
    happy: "Keep spreading joy. The world needs your light!✨",
    sad: "It's okay to feel this way. Better days are coming.💖",   
    angry: "Breath deeply. Let go and find your peace.🦋",
    anxious: "You are safe, and everything will be okay.🤍",
    calm: "Enjoy this peaceful moment - you've earned it.🌺"
};

if (mood && affirmations[mood]) {
    document.getElementById("mood-text").innerText = moodEmojis[mood] + " " + mood.charAt(0).toUpperCase() + mood.slice(1);

    document.getElementById("affirmation").innerText = affirmations[mood];
} else {
    document.getElementById("mmod-text").innerText = "Mood not selected."

    document.getElementById("affirmation").innerText = "Please go back and select how you're feeling💭"
}

const extraAffirmations = [
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
        currentIndex = (currentIndex + 1) % extraAffirmations.length;
        textEl.textContent = extraAffirmations[currentIndex];
        textEl.style.opacity = 1;
    }, 500);
}

setInterval(showNextAffirmation, 5000);

// function toggleSidebar() {
//     const sidebar = document.getElementById("sidebar");
//     sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
// }

// function closeSidebar() {
//     document.getElementById("sidebar").style.width = "0";
// }

const text = "How are you feeling today?";
const typingText = document.getElementById("typing-text");
const moodSection = document.getElementById("mood-selection");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); //speed of typing
    }
}

window.onload = typeWriter;

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
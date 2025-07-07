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
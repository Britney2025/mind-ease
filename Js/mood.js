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
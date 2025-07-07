const moods = document.querySelectorAll('.mood');

moods.forEach(button => {
    button.addEventListener('click', () => {
        const selectedMood = button.getAttribute('data-mood');
        localStorage.setItem('userMood', selectedMood);
        window.location.href = 'mood.html';
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}
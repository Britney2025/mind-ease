const moods = document.querySelectorAll('.mood');

moods.forEach(button => {
    button.addEventListener('click', () => {
        const selectedMood = button.getAttribute('data-mood');
        localStorage.setItem('userMood', selectedMood);
        window.location.href = 'mood.html';
    });
});
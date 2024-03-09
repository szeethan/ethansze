// Script to handle the dropdown functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const aboutBtn = document.getElementById('about-btn');
    const aboutContent = document.getElementById('about-content');

    aboutBtn.addEventListener('click', function() {
        aboutContent.classList.toggle('hidden');
    });
});

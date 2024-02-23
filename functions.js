
// Function to add mouseenter and mouseleave event listeners to skills span elements
function addSkillHoverEffect() {
    const spanElements = document.querySelectorAll('#skills p span');

    spanElements.forEach(span => {
        span.addEventListener('mouseenter', () => {
            const randomRotation = Math.random() * 20 - 10; // Generate random angle between -10 and 10 degrees
            span.style.transform = `rotate(${randomRotation}deg)`;
        });

        span.addEventListener('mouseleave', () => {
            span.style.transform = 'rotate(0deg)';
        });
    });
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
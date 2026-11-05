// Welcome alert. I was having issues with getting my button to work so i asked gemini to clean up my java file. 
// I asked it to make as few changes to my code but make the dark and light toggle button functionable.

alert("Welcome to my portfolio! I hope you enjoy your visit.");

// 1. ScrollReveal (Third-Party Library)
ScrollReveal().reveal('.site', { delay: 300, duration: 800 });

// 2. Dark / Light Mode Feature
const themeToggleBtn = document.getElementById('theme-toggle');

// Load saved preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggleBtn) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    }
}

// Toggle theme on button click
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? '' : 'dark';

        if (newTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', '');
        }
    });
}
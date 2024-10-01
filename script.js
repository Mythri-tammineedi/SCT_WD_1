// Toggle navigation menu for mobile
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


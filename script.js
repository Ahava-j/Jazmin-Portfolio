let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll spy for active links
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

// Toggle menu on mobile
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Popup code – runs after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('construction-popup');
    const closeBtn = document.getElementById('close-popup');

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Hover animation for shoe cards
const shoeCards = document.querySelectorAll('.shoe-card');
shoeCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(255, 87, 51, 0.5)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// Dynamic shoe image change for hero section
const heroShoe = document.getElementById('hero-shoe');
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const shoeSrc = thumbnail.getAttribute('data-shoe');
        heroShoe.src = shoeSrc;
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
    });
});
thumbnails[0].classList.add('active');

// White Mode Toggle
const whiteModeToggle = document.getElementById('whiteModeToggle');
const body = document.body;

whiteModeToggle.addEventListener('click', () => {
    body.classList.toggle('white-mode');
    if (body.classList.contains('white-mode')) {
        whiteModeToggle.textContent = 'Dark Mode';
    } else {
        whiteModeToggle.textContent = 'White Mode';
    }

    // Apply white-mode class to all relevant elements
    const elementsToToggle = document.querySelectorAll(
        'header, .nav-links, .nav-links a, .icon, .menu-toggle, .search-bar, .hero, .hero-content h1 span, .hero-content p, .latest-shoes, .shoe-card, .shoe-card h3, footer, .social-links a, .newsletter h3, .newsletter-input, footer p'
    );
    elementsToToggle.forEach(element => element.classList.toggle('white-mode'));
});
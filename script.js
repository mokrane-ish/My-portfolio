/* ===== 1. Initialize Particles.js ===== */
// This config creates a cool, interactive particle web.
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80, // Number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00bfff" // Particle color (our primary color)
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00bfff", // Line color
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2, // Movement speed
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Pushes particles away from mouse
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Adds particles on click
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});


/* ===== 2. Mobile Navigation Toggle ===== */
const navToggleBtn = document.getElementById('nav-toggle-btn');
const navCloseBtn = document.getElementById('nav-close-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Function to OPEN the menu
navToggleBtn.addEventListener('click', () => {
    navMenu.classList.add('is-active');
});

// Function to CLOSE the menu
function closeMenu() {
    navMenu.classList.remove('is-active');
}

// Add close functionality to the 'X' button AND all the links
navCloseBtn.addEventListener('click', closeMenu);
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});


/* ===== 3. Scroll Fade-In Animations ===== */
// Use Intersection Observer API to detect when elements enter viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Select all elements with the 'fade-in' class and observe them
const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(el => observer.observe(el));

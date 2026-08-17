// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = this.elements[0].value;
        const email = this.elements[1].value;
        const message = this.elements[2].value;

        // Basic validation
        if (name.trim() && email.trim() && message.trim()) {
            alert(`Thank you ${name}! Your message has been sent.\nWe'll get back to you at ${email} soon.`);
            this.reset();
        } else {
            alert('Please fill in all fields');
        }
    });
}

// Sign In Form Validation (for index.html)
const signInForm = document.getElementById('signInForm');
if (signInForm) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Reset errors
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        emailInput.classList.remove('input-error');
        passwordInput.classList.remove('input-error');

        let isValid = true;

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            emailError.style.display = 'block';
            emailInput.classList.add('input-error');
            isValid = false;
        }

        // Validate password
        if (!passwordInput.value.trim()) {
            passwordError.style.display = 'block';
            passwordInput.classList.add('input-error');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!\nEmail: ' + emailInput.value + '\nRemember me: ' + document.getElementById('rememberMe').checked);
            // Here you would typically send the data to a server
            this.reset();
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Highlight active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

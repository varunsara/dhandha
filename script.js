/*===== NAVIGATION MENU =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== CLOSE MENU WITH CLOSE BUTTON =====*/
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*===== SHOW SCROLL TO TOP =====*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollTop);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = {
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
};

// Initialize scroll animations manually since we don't have ScrollReveal library
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation styles and observe elements
const animatedElements = document.querySelectorAll('.hero__title, .hero__description, .hero__buttons, .hero__image, .section__title, .section__subtitle, .service__card, .about__content, .contact__info, .contact__form');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

/*===== SMOOTH SCROLLING =====*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/*===== CONTACT FORM VALIDATION AND SUBMISSION =====*/
const contactForm = document.getElementById('contact-form');
const formInputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
};

const formErrors = {
    name: document.getElementById('name-error'),
    email: document.getElementById('email-error'),
    message: document.getElementById('message-error')
};

// Validation functions
const validators = {
    name: (value) => {
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
    },
    
    email: (value) => {
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
    },
    
    message: (value) => {
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
    }
};

// Real-time validation
Object.keys(validators).forEach(field => {
    if (formInputs[field]) {
        formInputs[field].addEventListener('blur', () => validateField(field));
        formInputs[field].addEventListener('input', () => clearError(field));
    }
});

function validateField(field) {
    const value = formInputs[field].value;
    const error = validators[field](value);
    
    if (error) {
        showError(field, error);
        return false;
    } else {
        clearError(field);
        return true;
    }
}

function showError(field, message) {
    formInputs[field].classList.add('error');
    if (formErrors[field]) {
        formErrors[field].textContent = message;
    }
}

function clearError(field) {
    formInputs[field].classList.remove('error');
    if (formErrors[field]) {
        formErrors[field].textContent = '';
    }
}

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        const isValid = Object.keys(validators).every(field => validateField(field));
        
        if (!isValid) return;
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual API call)
            await simulateFormSubmission();
            
            // Show success message
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

// Simulate form submission
function simulateFormSubmission() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random success/failure for demo
            Math.random() > 0.1 ? resolve() : reject(new Error('Submission failed'));
        }, 2000);
    });
}

/*===== NOTIFICATION SYSTEM =====*/
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <span class="notification__message">${message}</span>
            <button class="notification__close" onclick="this.parentElement.parentElement.remove()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        max-width: 400px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#2563eb'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.querySelector('.notification__content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification__close').style.cssText = `
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: background-color 0.2s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/*===== LOADING STATES =====*/
function addLoadingState(element) {
    element.classList.add('loading');
}

function removeLoadingState(element) {
    element.classList.remove('loading');
}

/*===== INTERSECTION OBSERVER FOR ANIMATIONS =====*/
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe elements for fade-in animation
document.querySelectorAll('.service__card, .stat').forEach(el => {
    fadeInObserver.observe(el);
});

/*===== COUNTER ANIMATION FOR STATS =====*/
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '');
        }
    }, 16);
}

// Initialize counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.stat__number');
            const text = number.textContent;
            const value = parseInt(text.replace(/\D/g, ''));
            
            number.textContent = '0' + text.replace(/\d/g, '');
            animateCounter(number, value);
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

/*===== PARALLAX EFFECT FOR HERO SECTION =====*/
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxElement = document.querySelector('.hero__img-wrapper');
    
    if (parallaxElement) {
        const speed = scrolled * -0.1;
        parallaxElement.style.transform = `translateY(${speed}px)`;
    }
}

window.addEventListener('scroll', parallaxEffect);

/*===== TYPEWRITER EFFECT FOR HERO TITLE =====*/
function typewriterEffect(element, text, speed = 100) {
    element.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effect when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const title = entry.target.querySelector('.hero__title');
            const originalText = title.innerHTML;
            
            setTimeout(() => {
                typewriterEffect(title, originalText, 50);
            }, 500);
            
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

/*===== LAZY LOADING FOR IMAGES =====*/
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

/*===== DARK MODE TOGGLE (Optional) =====*/
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

/*===== PERFORMANCE OPTIMIZATION =====*/
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(scrollActive, 10));
window.addEventListener('scroll', debounce(scrollHeader, 10));
window.addEventListener('scroll', debounce(scrollTop, 10));
window.addEventListener('scroll', debounce(parallaxEffect, 10));

/*===== ACCESSIBILITY ENHANCEMENTS =====*/
// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
        }
    }
});

// Focus management for mobile menu
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        setTimeout(() => {
            if (navClose) {
                navClose.focus();
            }
        }, 100);
    });
}

/*===== SERVICE WORKER REGISTRATION (PWA) =====*/
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

/*===== PAGE LOAD OPTIMIZATION =====*/
document.addEventListener('DOMContentLoaded', () => {
    // Remove loading class from body once everything is loaded
    document.body.classList.remove('loading');
    
    // Initialize all animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Preload critical resources
function preloadResources() {
    const criticalResources = [
        'styles.css',
        // Add other critical resources
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
    });
}

// Call preload function
preloadResources();

/*===== ERROR HANDLING =====*/
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // You can add error reporting here
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // You can add error reporting here
});

console.log('🚀 Dhandha website loaded successfully!');
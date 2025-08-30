// Main JavaScript for NALD Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    initMobileNav();
    
    // Load Programs Data
    loadPrograms();
    
    // Smooth Scroll for Anchor Links
    initSmoothScroll();
    
    // Contact Form Handler
    initContactForm();
});

// Mobile Navigation Toggle
function initMobileNav() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Focus trapping for accessibility
        if (!isExpanded) {
            const firstLink = navMenu.querySelector('a');
            if (firstLink) firstLink.focus();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Load Programs Data
async function loadPrograms() {
    const programsContainer = document.getElementById('latest-programs');
    if (!programsContainer) return;
    
    try {
        const response = await fetch('/data/programs.json');
        if (!response.ok) {
            throw new Error('Failed to load programs data');
        }
        
        const programs = await response.json();
        renderPrograms(programs.slice(0, 8), programsContainer);
    } catch (error) {
        console.error('Error loading programs:', error);
        programsContainer.innerHTML = '<p>Unable to load programs at this time.</p>';
    }
}

// Render Programs
function renderPrograms(programs, container) {
    if (!programs || programs.length === 0) {
        container.innerHTML = '<p>No programs available at this time.</p>';
        return;
    }
    
    const programsHTML = programs.map(program => `
        <article class="program-card" id="${program.id}">
            ${program.image ? `
                <div class="program-card__image">
                    <img src="/images/programs/${program.image}" 
                         alt="${program.title}" 
                         width="300" 
                         height="200" 
                         loading="lazy"
                         decoding="async">
                </div>
            ` : ''}
            <div class="program-card__content">
                <h3 class="program-card__title">${program.title}</h3>
                <p class="program-card__description">${program.description}</p>
                <div class="program-card__meta">
                    <time datetime="${program.date}">${formatDate(program.date)}</time>
                </div>
            </div>
        </article>
    `).join('');
    
    container.innerHTML = `
        <div class="programs-grid">
            ${programsHTML}
        </div>
    `;
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without page jump
                history.pushState(null, null, href);
            }
        });
    });
}

// Contact Form Handler
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            showToast('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showToast('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        showToast('Thank you for your message! We will get back to you soon.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Toast Notification
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 5000);
    
    // Allow manual dismissal
    toast.addEventListener('click', function() {
        this.classList.remove('show');
        setTimeout(() => {
            if (this.parentNode) {
                this.remove();
            }
        }, 300);
    });
}

// Intersection Observer for Lazy Loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initLazyLoading();

// Add CSS for toast types
const style = document.createElement('style');
style.textContent = `
    .toast--error {
        background-color: var(--error);
    }
    
    .toast--warning {
        background-color: var(--warning);
    }
    
    .toast--success {
        background-color: var(--success);
    }
    
    .program-card__image {
        margin-bottom: var(--space-lg);
    }
    
    .program-card__image img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: var(--radius-md);
    }
    
    .program-card__meta {
        margin-top: var(--space-md);
        color: var(--text-lighter);
        font-size: 0.875rem;
    }
    
    .program-card__content {
        text-align: left;
    }
`;
document.head.appendChild(style);

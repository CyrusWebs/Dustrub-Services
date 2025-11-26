// ===== Page Navigation =====
document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.getAttribute('data-page');
        showPage(pageName);
    });
});

function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });

    // Show selected page
    const page = document.getElementById(pageName);
    if (page) {
        page.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    // Close mobile menu
    const navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        document.getElementById('navToggle').classList.remove('active');
    }

    // Close all modals
    closeAllModals();
    // Update active nav link styling
    updateActiveNavLink();

    // Persist page in URL hash so refresh/back-forward stays on the same page
    try {
        history.replaceState(null, '', '#' + pageName);
    } catch (err) {
        // Fallback if history API isn't available
        location.hash = pageName;
    }
}

// ===== Mobile Menu Toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== Floating Action Buttons =====
const callBtn = document.getElementById('callBtn');
const partnerBtn = document.getElementById('partnerBtn');
const callModal = document.getElementById('callModal');
const partnerModal = document.getElementById('partnerModal');
const backdrop = document.getElementById('backdrop');

callBtn.addEventListener('click', () => {
    openModal('callModal');
});

partnerBtn.addEventListener('click', () => {
    openModal('partnerModal');
});

// storyBtn may or may not exist depending on whether the button is present in the DOM
const storyBtn = document.getElementById('storyBtn');
if (storyBtn) {
    storyBtn.addEventListener('click', () => {
        openModal('storyModal');
    });
}

// Wire 'More' buttons on the homepage preview cards to navigate to the related pages
document.querySelectorAll('.more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const page = btn.getAttribute('data-page');
        if (page) showPage(page);
    });
});

// ===== Modal Functions =====
function openModal(modalId) {
    console.log('Opening modal:', modalId);
    const modal = document.getElementById(modalId);
    const backdrop = document.getElementById('backdrop');
    
    console.log('Modal found:', !!modal);
    console.log('Backdrop found:', !!backdrop);
    
    if (modal) {
        modal.classList.add('active');
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Modal opened successfully');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const backdrop = document.getElementById('backdrop');
    
    if (modal) {
        modal.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    
    const backdrop = document.getElementById('backdrop');
    backdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking on backdrop
backdrop.addEventListener('click', closeAllModals);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

// ===== Form Submissions =====
function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const message = form.elements[2].value;

    if (name && email && message) {
        alert(`Thank you, ${name}! We've received your message. We'll get back to you at ${email} soon.`);
        form.reset();
    }
}

function handleQuoteSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const serviceType = form.elements[3].value;

    if (name && email && serviceType) {
        alert(`Thank you, ${name}! We've received your quote request for ${serviceType}. We'll send the quote to ${email} shortly.`);
        form.reset();
    }
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ===== Navbar Scroll Effect =====

// Ensure 'Read Our Story' button only opens modal
// Fresh implementation for 'Read Our Story' button and modal
const freshStoryBtn = document.getElementById('freshStoryBtn');
const freshStoryModal = document.getElementById('freshStoryModal');
const closeFreshStoryModal = document.getElementById('closeFreshStoryModal');

if (freshStoryBtn && freshStoryModal && closeFreshStoryModal) {
    freshStoryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        freshStoryModal.classList.add('active');
        document.getElementById('backdrop').classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    closeFreshStoryModal.addEventListener('click', function(e) {
        e.preventDefault();
        freshStoryModal.classList.remove('active');
        document.getElementById('backdrop').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

const navbar = document.querySelector('.navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (lastScrollY > 10) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
});

// ===== Page Load Effects =====
window.addEventListener('load', () => {
    // Add loaded class to body for any animations
    document.body.classList.add('loaded');
    // On load, if there's a hash, show that page; otherwise keep default
    const initial = window.location.hash ? window.location.hash.slice(1) : null;
    if (initial) {
        showPage(initial);
    } else {
        // Ensure active link matches default visible page
        updateActiveNavLink();
    }
});

// Keep page in sync when user navigates with back/forward buttons
window.addEventListener('hashchange', () => {
    const page = window.location.hash ? window.location.hash.slice(1) : null;
    if (page) showPage(page);
});

// ===== Active Navigation Link =====
function updateActiveNavLink() {
    const currentPage = document.querySelector('.page:not(.hidden)');
    if (currentPage) {
        const pageId = currentPage.getAttribute('id');
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPage = link.getAttribute('data-page');
            if (linkPage === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Note: `showPage()` calls `updateActiveNavLink()` so explicit click handlers are not required here.

// ===== Button Click Handlers =====
// Removed duplicate button click handler for [data-page]

// ===== Hero Buttons =====
const quoteButtons = document.querySelectorAll('[data-page="quote"]');
quoteButtons.forEach(btn => {
    if (btn.classList && !btn.classList.contains('nav-link')) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('quote');
        });
    }
});

const servicesButtons = document.querySelectorAll('[data-page="services"]');
servicesButtons.forEach(btn => {
    if (btn.classList && !btn.classList.contains('nav-link')) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('services');
        });
    }
});

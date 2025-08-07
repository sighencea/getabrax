document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation buttons
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionName = this.textContent.toLowerCase().replace(' ', '-');
            const targetSection = document.getElementById(sectionName) || 
                                 document.getElementById(sectionName.replace('-', ''));
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA button interactions
    const ctaButtons = document.querySelectorAll('button[tabindex="0"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Trial') || this.textContent.includes('Started')) {
                // Simulate trial signup
                alert('Thank you for your interest! Trial signup coming soon.');
            } else if (this.textContent.includes('Demo')) {
                // Simulate demo booking
                alert('Demo booking feature coming soon. Contact us at demo@abrax.com');
            }
        });
    });

    // Testimonial card interactions
    const testimonialCards = document.querySelectorAll('#testimonials .cursor-pointer');
    testimonialCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active state from all cards
            testimonialCards.forEach(c => {
                c.classList.remove('border-blue-300', 'shadow-lg');
                c.classList.add('border-gray-200');
            });
            
            // Add active state to clicked card
            this.classList.remove('border-gray-200');
            this.classList.add('border-blue-300', 'shadow-lg');
        });
    });

    // Mobile menu toggle (if needed in future)
    const mobileMenuToggle = document.querySelector('[data-mobile-menu]');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const mobileMenu = document.querySelector('[data-mobile-menu-content]');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }

    // Form validation placeholder
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submission coming soon!');
        });
    });
});

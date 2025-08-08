document.addEventListener('DOMContentLoaded', function () {
    const correctPasswordHash = "-89884032"; // Hashed version of "22446688"

    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const passwordSubmit = document.getElementById('password-submit');
    const passwordError = document.getElementById('password-error');
    const rootElement = document.getElementById('root');

    // Simple hash function
    const hash = (s) => {
        let h = 0;
        for (let i = 0; i < s.length; i++) {
            h = Math.imul(31, h) + s.charCodeAt(i) | 0;
        }
        return h.toString();
    };

    // Hide the main content initially
    rootElement.style.display = 'none';

    passwordSubmit.addEventListener('click', () => {
        const inputPassword = passwordInput.value;
        if (hash(inputPassword) === correctPasswordHash) {
            passwordOverlay.style.display = 'none';
            rootElement.style.display = 'block';
            initializeScrollReveal();
        } else {
            passwordError.classList.remove('hidden');
        }
    });

    function initializeScrollReveal() {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '20px',
            duration: 500,
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: false
        });

        // Hero Section
        sr.reveal('.text-5xl', { delay: 300, origin: 'left' });
        sr.reveal('p.text-xl', { delay: 400, origin: 'left' });
        sr.reveal('.flex-col.sm\\:flex-row.gap-4', { delay: 500, origin: 'left' });
        sr.reveal('.hero-right-column', { delay: 300, origin: 'right' });

        // Benefits Section
        sr.reveal('#benefits .group', { interval: 150 });

        // Testimonials Section
        sr.reveal('#testimonials .relative', { delay: 300, origin: 'left' });
        sr.reveal('#testimonials .space-y-6', { delay: 400, origin: 'right' });


        // How it works section
        sr.reveal('#how-it-works .grid.md\\:grid-cols-3.gap-8 > div', { interval: 200, origin: 'top' });

        // Companies section
        sr.reveal('.grid.grid-cols-2.md\\:grid-cols-4.lg\\:grid-cols-6.gap-8.items-center.opacity-60 > div', { interval: 100 });

        // Pricing Section
        sr.reveal('#pricing .bg-gray-50', { delay: 300 });

        // CTA Section
        sr.reveal('.py-16.bg-blue-600 h2', { delay: 300 });
        sr.reveal('.py-16.bg-blue-600 p', { delay: 400 });
        sr.reveal('.py-16.bg-blue-600 button', { delay: 500 });
    }
});

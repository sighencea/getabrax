document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Testimonial switching
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials) {
        testimonials.forEach((testimonial, index) => {
            testimonial.addEventListener('click', () => {
                testimonials.forEach(t => {
                    t.classList.remove('border-blue-300', 'shadow-lg');
                    t.classList.add('border-gray-200');
                });
                testimonial.classList.add('border-blue-300', 'shadow-lg');
                testimonial.classList.remove('border-gray-200');
            });
        });
    }


    // Video play button
    const playButton = document.querySelector('.play-button');
    const videoContainer = document.querySelector('.video-container');
    if (playButton && videoContainer) {
        playButton.addEventListener('click', () => {
            videoContainer.innerHTML = `
                <div class="w-full h-80 bg-gray-800 flex items-center justify-center">
                    <div class="text-white text-center">
                        <div class="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p>Loading demo video...</p>
                    </div>
                </div>
            `;
        });
    }

    // Sticky CTA on mobile
    const stickyCta = document.querySelector('.sticky-cta');
    if (stickyCta) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                stickyCta.classList.remove('hidden');
            } else {
                stickyCta.classList.add('hidden');
            }
        });
    }

    // Form validation
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic validation logic
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const company = document.getElementById('company');
            const password = document.getElementById('password');
            let isValid = true;

            if (!fullName.value.trim()) {
                isValid = false;
                fullName.classList.add('border-red-300');
            } else {
                fullName.classList.remove('border-red-300');
            }
            if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                isValid = false;
                email.classList.add('border-red-300');
            } else {
                email.classList.remove('border-red-300');
            }
            if (!company.value.trim()) {
                isValid = false;
                company.classList.add('border-red-300');
            } else {
                company.classList.remove('border-red-300');
            }
            if (password.value.length < 8) {
                isValid = false;
                password.classList.add('border-red-300');
            } else {
                password.classList.remove('border-red-300');
            }

            if (isValid) {
                const submitButton = signupForm.querySelector('button[type="submit"]');
                submitButton.disabled = true;
                submitButton.innerHTML = `
                    <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Account...
                `;
                setTimeout(() => {
                    alert('Account created successfully! Check your email for next steps.');
                    submitButton.disabled = false;
                    submitButton.innerHTML = 'Create My Free Account';
                    signupForm.reset();
                }, 2000);
            }
        });
    }

    // Smooth scrolling for hero CTA
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#signup').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

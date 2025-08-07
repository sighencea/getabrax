document.addEventListener('DOMContentLoaded', function() {
    // Show/hide password
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        const togglePasswordButton = passwordInput.nextElementSibling;

        togglePasswordButton.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            const icon = this.querySelector('i');
            icon.classList.toggle('bi-eye-fill');
            icon.classList.toggle('bi-eye-slash-fill');
        });
    }

    // Testimonials
    const testimonials = document.querySelectorAll('[data-testimonial]');
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('click', function() {
            testimonials.forEach(t => {
                t.classList.remove('border-blue-300', 'shadow-lg');
                t.classList.add('border-gray-200', 'hover:border-gray-300');
            });
            this.classList.add('border-blue-300', 'shadow-lg');
            this.classList.remove('border-gray-200', 'hover:border-gray-300');
        });
    });
});

// Smooth scroll functionality
function scrollToRegister() {
    document.getElementById('register').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;

    // Show success message
    form.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h3 style="color: #646cff; margin-bottom: 1rem;">Thanks for joining, ${name}! 🎉</h3>
            <p>We'll send you an email at ${email} with next steps.</p>
        </div>
    `;
}

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

// Observe all feature cards and steps
document.querySelectorAll('.feature-card, .step').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Add fade-in class for animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');

            // Close other open FAQ items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.parentElement.classList.remove('active');
                }
            });
        });
    });
});

const form = document.getElementById('email-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        formStatus.textContent = 'Thank you! We will contact you shortly.';
        form.reset(); // Clear the form
    } else {
        formStatus.textContent = 'Oops! Something went wrong. Please try again.';
    }
});

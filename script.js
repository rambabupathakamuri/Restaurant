document.addEventListener("DOMContentLoaded", function() {
    // Initialize a simple map placeholder
    const map = document.getElementById('map');
    if (map) {
        map.innerHTML = '<p>Map placeholder: 123 Flavor Street, Boston, MA</p>';
    }

    // Simple form submission handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for contacting us! We will get back to you soon.');
            form.reset();
        });
    }
});

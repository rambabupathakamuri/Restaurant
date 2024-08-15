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

    // Testimonials slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }
        showTestimonial(currentTestimonial);
        
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000); // Change testimonial every 5 seconds
    }

    // Order buttons click event
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to your order!');
        });
    });

    // Reservation button click event
    const reservationButton = document.getElementById('reservation-btn');
    if (reservationButton) {
        reservationButton.addEventListener('click', function() {
            window.location.href = 'contact.html#contact-form';
        });
    }
});

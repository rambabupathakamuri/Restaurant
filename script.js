document.addEventListener("DOMContentLoaded", function() {
    // Initialize a simple map placeholder
    const map = document.getElementById('map');
    map.innerHTML = '<p>Map placeholder: 123 Flavor Street, Boston, MA</p>';

    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

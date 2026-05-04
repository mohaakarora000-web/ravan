// Wait for the DOM to load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for the Explore button
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const featuresSection = document.getElementById('features');
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        // Change navbar styling when scrolling down
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            // Revert back when at the top
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});

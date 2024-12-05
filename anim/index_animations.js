document.addEventListener("DOMContentLoaded", () => {
    // Select all .Main_Section elements
    const sections = document.querySelectorAll('.Main_Section');
    const footerAnim = document.querySelectorAll('.Main_Footer_Container');

    // Create IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-bottom');
                observer.unobserve(entry.target); // Stop observing after animation is triggered
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    // Observe each section
    sections.forEach(section => observer.observe(section));
});
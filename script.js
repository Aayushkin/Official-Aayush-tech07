// Mobile Menu Toggle
const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Intersection Observer for Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (revealElements.length > 0) {
    const observerOptions = {
      root: null, // observes intersections relative to the viewport
      rootMargin: '0px',
      threshold: 0.1 // percentage of the element that needs to be visible to trigger
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Optional: stop observing after animation
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    revealElements.forEach(el => {
      intersectionObserver.observe(el);
    });
  }
});

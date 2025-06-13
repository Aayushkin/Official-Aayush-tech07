// ====== Mobile Menu Toggle ======
const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleButton.classList.toggle('open');
    toggleButton.innerHTML = toggleButton.classList.contains('open')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });
}

// ====== Intersection Observer for Scroll Animations ======
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (revealElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    revealElements.forEach(el => {
      intersectionObserver.observe(el);
    });
  }
});

// ====== Smooth Scroll for Anchor Links ======
document.addEventListener('click', function (e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
    const targetId = e.target.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }
});

// ====== Contact Form Animation & Fake Submit ======
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactForm.classList.add('submitted');
    contactForm.innerHTML = `
      <div style="text-align:center; padding:2rem 0;">
        <i class="fas fa-check-circle" style="font-size:2.5rem;color:#00f2fe;"></i>
        <h3 style="margin:1rem 0 0.5rem 0;">Thank you!</h3>
        <p>Your message has been sent.<br>We will get back to you soon.</p>
      </div>
    `;
  });
}

// ====== Digital SVG Animation (optional, for extra effect) ======
const svg = document.querySelector('.digital-bg svg');
if (svg) {
  let t = 0;
  function animateSVG() {
    t += 0.01;
    const c1 = svg.querySelector('circle:nth-child(2)');
    const c2 = svg.querySelector('circle:nth-child(3)');
    if (c1 && c2) {
      c1.setAttribute('cx', `${20 + Math.sin(t) * 2}%`);
      c1.setAttribute('cy', `${30 + Math.cos(t) * 2}%`);
      c2.setAttribute('cx', `${80 + Math.cos(t) * 1.5}%`);
      c2.setAttribute('cy', `${70 + Math.sin(t) * 1.5}%`);
    }
    requestAnimationFrame(animateSVG);
  }
  animateSVG();
}

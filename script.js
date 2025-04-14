const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');
const innerWidth=window.innerWidth
// Menu open karega
menuIcon.addEventListener('click', () => {
  navLinks.classList.add('show');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

// Menu close karega
closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('show');
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});

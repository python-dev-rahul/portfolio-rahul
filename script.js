const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a'); // ✅ Saare `<a>` select kiye

// ✅ Menu open karega
menuIcon.addEventListener('click', () => {
  navLinks.classList.add('show');
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

// ✅ Menu close karega
closeIcon.addEventListener('click', closeMenu);

// ✅ Jab bhi koi link click kare, aur screen width 772px se kam ho, tabhi close ho
links.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {  // ✅ Width check
      closeMenu();
    }
  });
});

// ✅ Menu close karne ka function
function closeMenu() {
  navLinks.classList.remove('show');
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
}

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');

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

// Screen resize pe icons aur menu reset
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('show');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'none';
  } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});
/* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// 

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: ['React Js', 'Generative AI', 'C++ Programming'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// AUTH MODAL BEHAVIOR
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.acc-cc');
const allLoginBtns = document.querySelectorAll('.acc-cc');
const iconClose = document.getElementById('closeBtn');

// Toggle forms
registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

// Open popup
allLoginBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
  });
});

// Close popup
iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  wrapper.classList.remove('active');
});

// AUTH STATE MANAGEMENT
const authButtons = document.getElementById('auth-buttons');
const logoutButton = document.getElementById('logout-button');

// Check if logged in (based on localStorage token)
function checkLoginState() {
  const token = localStorage.getItem('token');
  if (token) {
    authButtons.style.display = 'none';
    logoutButton.style.display = 'block';
  } else {
    authButtons.style.display = 'block';
    logoutButton.style.display = 'none';
  }
}

checkLoginState();

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('token');
  alert("Logged out successfully!");
  checkLoginState();
});

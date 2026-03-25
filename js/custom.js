// AOS animation init
AOS.init();

// mouse follower
// Shery.mouseFollower();
// Shery.makeMagnet(".magnet")
// Shery.textAnimate(".text-target", {
//   style: 1,
// });
// ns-navbar
// Add ns-overlay functionality
const ns_overlay = document.getElementById('ns-overlay');
const ns_hamburger = document.getElementById('ns-hamburger');
const navLinks = document.querySelector('.nav-links');
function toggleMenu() {
  ns_hamburger.classList.toggle('ns_active');
  navLinks.classList.toggle('ns_active');
  ns_overlay.classList.toggle('ns_active');
}
ns_hamburger.addEventListener('click', toggleMenu);
// Close menu when links are clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    ns_hamburger.classList.remove('ns_active');
    navLinks.classList.remove('ns_active');
    ns_overlay.classList.remove('ns_active');
  });
});
// Close menu when clicking ns-overlay
ns_overlay.addEventListener('click', () => {
  ns_hamburger.classList.remove('ns_active');
  navLinks.classList.remove('ns_active');
  ns_overlay.classList.remove('ns_active');
});
// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    ns_hamburger.classList.remove('ns_active');
    navLinks.classList.remove('ns_active');
    ns_overlay.classList.remove('ns_active');
  }
});
// Auto year change
document.getElementById('currentYear').textContent = new Date().getFullYear();
// nav ns_active change
function setns_activeNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('ns_active');
    const linkPath = new URL(link.href).pathname;
    // Exact match
    if (linkPath === currentPath) {
      link.classList.add('ns_active');
    }
    // Handle home page (both / and /index.html)
    if ((currentPath === '/' || currentPath.endsWith('/index.html')) &&
      (linkPath === '/' || linkPath.endsWith('/index.html'))) {
      link.classList.add('ns_active');
    }
  });
}
document.addEventListener('DOMContentLoaded', setns_activeNavLink);
//typewriter
new Typewriter('#typewriter', {
  strings: ['Hands-On', 'Practical', 'Rewarding'],
  autoStart: true,
  loop: true,
  pauseFor: 500,
  delay: 'natural',
  deleteSpeed: 110,
});
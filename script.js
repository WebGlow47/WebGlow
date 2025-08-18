const nav = document.querySelector('.navbar');
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.nav-link');

if (ham && menu) {
  ham.addEventListener('click', () => menu.classList.toggle('open'));
}

// Active link highlight on scroll
const sections = document.querySelectorAll('section, header');
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 100;
  links.forEach(l => l.classList.remove('active'));
  sections.forEach(sec => {
    if (fromTop >= sec.offsetTop && fromTop < sec.offsetTop + sec.offsetHeight) {
      const id = `#${sec.id}`;
      const active = document.querySelector(`.nav-link[href='${id}']`);
      if (active) active.classList.add('active');
    }
  });
});

// Current year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();



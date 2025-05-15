// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});


const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});


document.getElementById('currentYear').textContent = new Date().getFullYear();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (this.getAttribute('href') === '#') return;
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
      });
    }
  });
});


const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
  } else {
    header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-music');
  const tryPlay = () => {
    audio.play().catch(() => {
      document.body.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });
  };

  tryPlay();

});

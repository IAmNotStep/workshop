// Scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.card, .track-card, .timeline-item, .prize-card, .faq-item').forEach((el) => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.background = 'rgba(8, 8, 8, 0.97)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.85)';
  }
});

// Form submission
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.querySelector('.btn-submit');
  btn.textContent = 'Application Submitted!';
  btn.style.background = '#22c55e';
  btn.disabled = true;
});

// ── Mobile nav toggle ──
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ── Scroll reveal ──
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ── Add reveal classes to elements ──
function setupReveals() {
  const selectors = [
    '.project-card',
    '.about-text',
    '.about-disciplines',
    '.discipline',
    '.section-contact .contact-text',
    '.section-contact .contact-links'
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${i * 0.1}s`;
    });
  });
}

// ── Project gallery thumbnails ──
document.querySelectorAll('.project-gallery').forEach(gallery => {
  const mainImages = gallery.querySelectorAll('.main-image');
  const thumbs = gallery.querySelectorAll('.gallery-thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = Number(thumb.dataset.img);
      mainImages.forEach((img, i) => {
        const isActive = i === idx;
        img.classList.toggle('active', isActive);
        if (img.tagName === 'VIDEO') {
          if (isActive) img.play(); else img.pause();
        }
      });
      thumbs.forEach((t, i) => t.classList.toggle('active', i === idx));
    });
  });
});

// ── Navbar background on scroll ──
const navbar = document.querySelector('.navbar');

function updateNavbar() {
  if (window.scrollY > 50) {
    navbar.style.borderBottomColor = 'rgba(34, 34, 40, 0.8)';
  } else {
    navbar.style.borderBottomColor = 'transparent';
  }
}

window.addEventListener('scroll', updateNavbar, { passive: true });

// ── Init ──
setupReveals();
initReveal();
updateNavbar();

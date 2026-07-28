// Mobile Menu Toggle & Auto-Close
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn && navLinks) {
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  // Auto-close menu when tapping any link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  });
}

// Lightweight Scroll Animations with IntersectionObserver
const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.05
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      
      // Trigger progress bars on skill cards
      if (entry.target.classList.contains('skill-card') || entry.target.querySelector('.skill-bar-fill')) {
        const bar = entry.target.querySelector('.skill-bar-fill, .progress-bar');
        if (bar) {
          const width = bar.getAttribute('data-width') || '85%';
          bar.style.width = width.endsWith('%') ? width : width + '%';
        }
      }
      
      // Trigger stats counter on about page
      if (entry.target.classList.contains('stat-item') || entry.target.classList.contains('stats-container')) {
        const numEls = entry.target.querySelectorAll('.stat-num');
        numEls.forEach(numEl => {
          if (numEl && !numEl.classList.contains('counted')) {
            numEl.classList.add('counted');
            const target = parseInt(numEl.getAttribute('data-target')) || 0;
            const suffix = numEl.getAttribute('data-suffix') || '+';
            animateValue(numEl, 0, target, 1500, suffix);
          }
        });
      }
      
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));

// Counter Animation Helper
function animateValue(obj, start, end, duration, suffix = '') {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Instantly initialize any visible skill bars or stats on page load
window.addEventListener('DOMContentLoaded', () => {
  // Trigger any skill bars immediately
  document.querySelectorAll('.skill-bar-fill, .progress-bar').forEach(bar => {
    const width = bar.getAttribute('data-width') || '85%';
    bar.style.width = width.endsWith('%') ? width : width + '%';
  });

  // Trigger stats animation immediately
  document.querySelectorAll('.stat-num').forEach(numEl => {
    const target = parseInt(numEl.getAttribute('data-target')) || 0;
    const suffix = numEl.getAttribute('data-suffix') || '+';
    if (target > 0) {
      animateValue(numEl, 0, target, 1500, suffix);
    }
  });
});

// WhatsApp Form Handler
const waForm = document.getElementById('whatsappForm') || document.getElementById('wa-form');
if (waForm) {
  waForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameEl = document.getElementById('name');
    const msgEl = document.getElementById('message');
    const name = nameEl ? nameEl.value : '';
    const msg = msgEl ? msgEl.value : '';
    const text = encodeURIComponent(`Hello Anshul, I'm ${name}.\n\n${msg}`);
    window.open(`https://wa.me/917456057507?text=${text}`, '_blank');
  });
}

// Social Modal Handlers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
}
function closeModal(modal) {
  modal.classList.remove('active');
}

// Close modal on backdrop click or X button
document.querySelectorAll('.social-modal').forEach(modal => {
  const backdrop = modal.querySelector('.social-modal-backdrop');
  const closeBtn = modal.querySelector('.modal-close');
  if (backdrop) backdrop.addEventListener('click', () => closeModal(modal));
  if (closeBtn) closeBtn.addEventListener('click', () => closeModal(modal));
});

// Intercept social triggers across pages
document.querySelectorAll('.hero-socials a, .social-trigger').forEach(link => {
  const modalId = link.getAttribute('data-modal');
  if (modalId) {
    link.addEventListener('click', e => {
      e.preventDefault();
      openModal(modalId);
    });
  }
});

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all items first
    faqItems.forEach(i => i.classList.remove('active'));

    // If this one wasn't already open, open it
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Team bio accordion
const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach(card => {
  card.addEventListener('click', () => {
    const isActive = card.classList.contains('active');

    teamCards.forEach(c => c.classList.remove('active'));

    if (!isActive) {
      card.classList.add('active');
    }
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Sticky overlay header (only applies where .site-header-overlay exists)
const overlayHeader = document.querySelector('.site-header-overlay');

if (overlayHeader) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      overlayHeader.classList.add('scrolled');
    } else {
      overlayHeader.classList.remove('scrolled');
    }
  });
}
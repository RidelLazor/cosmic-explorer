// Cosmic Explorer JavaScript

function initializeApp() {
  console.log('Cosmic Explorer initialized!');
  loadStarfield();
  setupEventListeners();
}

function loadStarfield() {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
  });
}

function setupEventListeners() {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.addEventListener('click', handleNavClick);
  }
}

function handleNavClick(e) {
  if (e.target.tagName === 'A') {
    console.log('Navigating to', e.target.href);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

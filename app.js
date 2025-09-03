try {
  import('https://cdn.jsdelivr.net/npm/lucide@latest/dist/esm/lucide.js').then((m) => {
    m.createIcons();
  });
} catch (e) {
  console.warn('Lucide not loaded (network or CSP).', e);
}

const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
const menuToggle = document.getElementById('menuToggle');

if (menuToggle && menuOverlay) {
  menuToggle.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.classList.add('overlay-open');
  });
}

if (menuClose && menuOverlay) {
  menuClose.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.classList.remove('overlay-open');
  });
}

if (menuOverlay) {
  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove('active');
      document.body.classList.remove('overlay-open');
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOverlay) {
    menuOverlay.classList.remove('active');
    document.body.classList.remove('overlay-open');
  }
});
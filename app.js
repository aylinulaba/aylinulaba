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

const indexButton = document.getElementById('indexButton');
const indexMenu = document.getElementById('indexMenu');
const indexClose = document.getElementById('indexClose');

if (indexButton && indexMenu) {
  indexButton.addEventListener('click', () => {
    indexMenu.classList.add('active');
  });
}

if (indexClose && indexMenu) {
  indexClose.addEventListener('click', () => {
    indexMenu.classList.remove('active');
  });
}

if (indexMenu) {
  indexMenu.addEventListener('click', (e) => {
    const inner = e.target.closest('.index-menu__inner');
    if (!inner) indexMenu.classList.remove('active');
  });
}

const onScroll = () => {
  if (window.scrollY > 140) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
};
onScroll();
window.addEventListener('scroll', onScroll);

function initWorkSlider(sliderViewport) {
  const track = sliderViewport.querySelector('.work-slider__track');
  if (!track) return;
  const slides = Array.from(track.children);
  if (!slides.length) return;

  const prev = sliderViewport.querySelector('.work-nav--prev');
  const next = sliderViewport.querySelector('.work-nav--next');
  const dotsWrap = sliderViewport.querySelector('.work-dots');
  let index = 0;

  const updateDots = () => {
    if (!dotsWrap) return;
    const buttons = dotsWrap.querySelectorAll('button');
    buttons.forEach((b, i) => {
      if (i === index) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
  };

  const go = (i) => {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(${-index * 100}%)`;
    updateDots();
  };

  if (dotsWrap) {
    dotsWrap.innerHTML = '';
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      if (i === 0) b.setAttribute('aria-current', 'true');
      b.addEventListener('click', () => go(i));
      dotsWrap.appendChild(b);
    });
  }

  if (prev) prev.addEventListener('click', () => go(index - 1));
  if (next) next.addEventListener('click', () => go(index + 1));

  let startX = null;
  sliderViewport.addEventListener('pointerdown', (e) => { startX = e.clientX; });
  sliderViewport.addEventListener('pointerup', (e) => {
    if (startX == null) return;
    const dx = e.clientX - startX;
    if (dx > 40) go(index - 1);
    if (dx < -40) go(index + 1);
    startX = null;
  });

  window.addEventListener('resize', () => go(index));
  go(0);
}

document.querySelectorAll('.work-slider__viewport').forEach(initWorkSlider);
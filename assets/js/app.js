// Praxis
// Sticky left side
(function () {
  const head = document.querySelector('.site-head');
  if (!head) return;
  const set = () => {
    const h = Math.ceil(head.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--site-head-height', h + 'px');
  };
  window.addEventListener('load', set);
  window.addEventListener('resize', set);
  window.addEventListener('orientationchange', set);
  set();
})();
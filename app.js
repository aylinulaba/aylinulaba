try {
  import('https://cdn.jsdelivr.net/npm/lucide@latest/dist/esm/lucide.js').then((m) => {
    // Replace <i data-lucide="icon-name"></i> when present
    m.createIcons();
  });
} catch (e) {
  // Non-blocking if network is unavailable
  console.warn('Lucide not loaded (network or CSP).', e);
}
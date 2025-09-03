try {
  import('https://cdn.jsdelivr.net/npm/lucide@latest/dist/esm/lucide.js').then(m => {
    m.createIcons();
  });
} catch (e) {
  console.warn('Lucide not loaded.', e);
}
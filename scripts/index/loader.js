// --- Loader ---
const loader = document.getElementById('loader');

const alreadyLoaded = sessionStorage.getItem('nra-loaded');

if (alreadyLoaded) {
  // Já visitou — esconde o loader instantaneamente
  loader.style.display = 'none';
} else {
  // Primeira visita — roda normalmente
  const heroAnimEls = document.querySelectorAll(
    '.hero-eyebrow, .hero-title, .hero-desc, .hero-actions, .scroll-cue'
  );

  heroAnimEls.forEach(el => {
    el.style.animationPlayState = 'paused';
  });

  const minTime = new Promise(r => setTimeout(r, 4000));
  const pageLoad = new Promise(r => {
    if (document.readyState === 'complete') r();
    else window.addEventListener('load', r);
  });

  Promise.all([minTime, pageLoad]).then(() => {
    loader.classList.add('done');
    sessionStorage.setItem('nra-loaded', 'true');

    heroAnimEls.forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
      el.style.animationPlayState = 'running';
    });
  });
}
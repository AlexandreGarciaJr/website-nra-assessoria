// --- Video parallax ---
    const heroMedia = document.getElementById('heroMedia');
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroMedia.style.transform = `translateY(${y * 0.6}px)`;
      }
    }, { passive: true });

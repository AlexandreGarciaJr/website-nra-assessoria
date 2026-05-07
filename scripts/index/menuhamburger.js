
    // --- Hamburger / mobile nav (drawer direita) ---
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const navOverlay = document.getElementById('nav-overlay');
    const navClose = document.getElementById('nav-close');

    function openNav() {
      hamburger.classList.add('open');
      mobileNav.classList.add('open');
      navOverlay.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeNav() {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      navOverlay.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    hamburger.addEventListener('click', () => {
      hamburger.classList.contains('open') ? closeNav() : openNav();
    });
    navClose.addEventListener('click', closeNav);
    navOverlay.addEventListener('click', closeNav);
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
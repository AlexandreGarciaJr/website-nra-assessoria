
    // --- Staggered reveal: aplica delay escalonado por coluna nos grids ---
    const gridGroups = [
      { selector: '.pilar', cols: 1 },
      { selector: '.serv-card', cols: 2 },
      { selector: '.outro-card', cols: 2 },
      { selector: '.consult-card', cols: 3 },
    ];
    gridGroups.forEach(({ selector, cols }) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${(i % cols) * 0.5}s`;
      });
    });

    // --- Reveal on scroll (Intersection Observer) ---
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(el => io.observe(el));

    // --- Active nav link on scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav a[href^="#"]');
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(s => navObserver.observe(s));
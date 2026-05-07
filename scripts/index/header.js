 // --- Header scroll state ---
    const header = document.getElementById('header');
    const onScroll = () => {
      header.classList.toggle('solid', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
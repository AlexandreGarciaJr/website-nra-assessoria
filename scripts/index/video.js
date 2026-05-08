// --- Hero video: src por tamanho de tela ---
// const heroVideo = document.getElementById('hero-video');
// const isMobile = window.innerWidth <= 768;

// const playlist = isMobile ? [
//   './assets/mp4/Mixkit-Natural-Landscape-para-mobile.mp4',
//   './assets/mp4/mixkit-forest-in-the-mountains-para-mobile.mp4'
// ] : [
//   './assets/mp4/mixkit-natural-landscape-in-an-aerial-view-around-a-forest-41378-full-hd.mp4',
//   './assets/mp4/mixkit-forest-in-the-mountains-aerial-view-1764-full-hd.mp4'
// ];

// let heroIndex = 0;
// heroVideo.src = playlist[0];
// heroVideo.load();
// heroVideo.play().catch(() => {});

// heroVideo.addEventListener('ended', () => {
//   heroIndex = (heroIndex + 1) % playlist.length;
//   heroVideo.src = playlist[heroIndex];
//   heroVideo.play().catch(() => {});
// });


// // --- Hero video ---
// const heroVideo = document.getElementById('hero-video');
// const heroFallback = document.querySelector('.hero-fallback');

// const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
// const isMobile = window.innerWidth < 800;

// if (isIOS) {
//   heroVideo.style.display = 'none';
//   heroFallback.style.zIndex = '1';
// } else {
//   const playlist = [
//     './assets/mp4/mixkit-natural-landscape-in-an-aerial-view-around-a-forest-41378-full-hd.mp4',
//     './assets/mp4/mixkit-forest-in-the-mountains-aerial-view-1764-full-hd.mp4'
//   ];

//   let heroIndex = 0;
//   heroVideo.src = playlist[0];
//   heroVideo.load();
//   heroVideo.play().catch(() => {
//     heroVideo.style.display = 'none';
//     heroFallback.style.zIndex = '1';
//   });

//   heroVideo.addEventListener('ended', () => {
//     heroIndex = (heroIndex + 1) % playlist.length;
//     heroVideo.src = playlist[heroIndex];
//     heroVideo.play().catch(() => {});
//   });
// }

// --- Hero video fallback ---
const heroVideo = document.getElementById('hero-video');
const heroFallback = document.querySelector('.hero-fallback');

heroVideo.addEventListener('error', () => {
  heroFallback.style.zIndex = '1';
  heroVideo.style.display = 'none';
});

// iOS: se após 3s o vídeo ainda não tocou, mostra o fallback
setTimeout(() => {
  if (heroVideo.paused && heroVideo.readyState === 0) {
    heroFallback.style.zIndex = '1';
  }
}, 3000);

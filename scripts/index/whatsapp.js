// --- WhatsApp Float (clique: expande → clique de novo navega) ---
const waFloat = document.getElementById('whatsappFloat');
const waLink = 'https://wa.me/5511932788832?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20NRA.';
let waExpanded = false;

function expandWa() {
  waExpanded = true;
  waFloat.classList.add('expanded');
  waFloat.setAttribute('aria-expanded', 'true');
}
function collapseWa() {
  waExpanded = false;
  waFloat.classList.remove('expanded');
  waFloat.setAttribute('aria-expanded', 'false');
}

waFloat.addEventListener('click', () => {
  if (!waExpanded) {
    expandWa();
  } else {
    window.open(waLink, '_blank', 'noopener');
  }
});

waFloat.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    waFloat.click();
  }
});

// Clicar fora recolhe
document.addEventListener('click', (e) => {
  if (waExpanded && !waFloat.contains(e.target)) {
    collapseWa();
  }
});
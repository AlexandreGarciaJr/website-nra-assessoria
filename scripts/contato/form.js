// --- Phone mask ---
const telInput = document.getElementById('telefone');
telInput.addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 11);
  if (v.length <= 10) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  else v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  e.target.value = v;
});

// --- Pre-fill dropdown from URL param ---
const params = new URLSearchParams(window.location.search);
const srv = params.get('servico');
if (srv) {
  const sel = document.getElementById('servico');
  for (let opt of sel.options) {
    if (opt.value === srv) { sel.value = srv; break; }
  }
}

// --- Form submission ---
const form      = document.getElementById('contact-form');
const msgOk     = document.getElementById('form-success');
const msgErr    = document.getElementById('form-error');
const submitBtn = form.querySelector('.form-submit');

const submitIcon = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>';

form.addEventListener('submit', async e => {
  e.preventDefault();
  msgOk.style.display = 'none';
  msgErr.style.display = 'none';

  // Validação
  const required = form.querySelectorAll('[required]');
  let valid = true;
  required.forEach(f => {
    f.style.borderColor = '';
    if (!f.value.trim()) {
      f.style.borderColor = '#c0392b';
      valid = false;
    }
  });

  if (!valid) {
    msgErr.textContent = 'Por favor, preencha todos os campos obrigatórios.';
    msgErr.style.display = 'block';
    return;
  }

  // Enviando
  submitBtn.textContent = 'Enviando…';
  submitBtn.disabled = true;

  try {
    const data = new FormData(form);
    const resp = await fetch('enviar.php', { method: 'POST', body: data });

    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

    const json = await resp.json();

    if (json.status === 'ok') {
      msgOk.style.display = 'block';
      form.reset();
    } else {
      throw new Error(json.message || 'Erro no servidor');
    }

  } catch (err) {
    console.error('Erro ao enviar:', err);
    msgErr.textContent = 'Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.';
    msgErr.style.display = 'block';
  } finally {
    submitBtn.innerHTML = `Enviar Solicitação ${submitIcon}`;
    submitBtn.disabled = false;
  }
});
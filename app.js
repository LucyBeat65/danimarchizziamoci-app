// Logica dell'app — collegata ai Payment Link Stripe reali (creati il 15/10/2026).
// NB: senza un vero backend, l'unica conferma di pagamento che l'app può leggere è
// il redirect "Dopo il pagamento" configurato sul Payment Link, con un parametro
// nell'URL (es. ?purchase=guide). Finché quel redirect non punta all'indirizzo reale
// dell'app pubblicata, l'unlock va ancora confermato manualmente (pulsante "Simula").

// Payment Link reali: lasciare '' finché non creati, poi incollare l'URL di buy.stripe.com.
const GUIDE_PAYMENT_LINK_URL = 'https://buy.stripe.com/fZu28r8q7cYBgvB6Qacwg00';
const JOBS_PAYMENT_LINK_URL = 'https://buy.stripe.com/bJeaEXgWDe2F0wD4I2cwg01';

function checkPurchaseRedirect() {
  try {
    const params = new URLSearchParams(window.location.search);
    const purchase = params.get('purchase');
    if (purchase === 'guide') setGuideUnlocked();
    if (purchase === 'jobs') setJobsUnlocked();
    if (purchase) {
      params.delete('purchase');
      const qs = params.toString();
      history.replaceState({}, '', window.location.pathname + (qs ? '?' + qs : ''));
    }
  } catch (e) { /* URL non leggibile: nessun problema, si procede senza */ }
}

document.addEventListener('DOMContentLoaded', () => {
  checkPurchaseRedirect();
  renderIntro();
  renderChecklist();
  renderSteps();
  renderJobs();
  setupTabs();
  setupModal();
  setupUnlockButtons();
  setupQA();
});

function loadChecklistState() {
  try {
    return JSON.parse(localStorage.getItem('dk_checklist') || '{}');
  } catch (e) {
    return {};
  }
}
function saveChecklistState(state) {
  try {
    localStorage.setItem('dk_checklist', JSON.stringify(state));
  } catch (e) { /* storage non disponibile: va bene, la pagina funziona comunque */ }
}

function renderChecklist() {
  const el = document.getElementById('checklist');
  const state = loadChecklistState();
  el.innerHTML = QUICKSTART_CHECKLIST.map((group, gi) => `
    <h4>${escapeHtml(group.group)}</h4>
    <ul class="checklist-group">
      ${group.items.map((item, ii) => {
        const id = `c-${gi}-${ii}`;
        const checked = state[id] ? 'checked' : '';
        return `<li class="checklist-item">
          <label>
            <input type="checkbox" data-id="${id}" ${checked}>
            <span>${escapeHtml(item)}</span>
          </label>
        </li>`;
      }).join('')}
    </ul>
  `).join('');

  el.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const s = loadChecklistState();
      s[cb.dataset.id] = cb.checked;
      saveChecklistState(s);
    });
  });
}

function renderIntro() {
  const el = document.getElementById('intro-block');
  el.innerHTML = `<h3>${FREE_INTRO.title}</h3>${FREE_INTRO.html}`;
}

function isGuideUnlocked() {
  try {
    return localStorage.getItem('dk_guide_unlocked') === 'true';
  } catch (e) {
    return false;
  }
}
function setGuideUnlocked() {
  try {
    localStorage.setItem('dk_guide_unlocked', 'true');
  } catch (e) { /* storage non disponibile: va bene, solo non si ricorderà tra una visita e l'altra */ }
}

function setJobsUnlocked() {
  // TODO: quando il pacchetto di 10 posizioni avrà contenuto reale separato dall'anteprima,
  // usare questo flag (letto con localStorage.getItem('dk_jobs_unlocked')) per mostrarlo.
  try {
    localStorage.setItem('dk_jobs_unlocked', 'true');
  } catch (e) { /* storage non disponibile */ }
}

function renderSteps() {
  const list = document.getElementById('steps-list');
  const unlocked = isGuideUnlocked();
  list.innerHTML = STEPS.map(step => {
    if (step.free || unlocked) {
      const icon = step.free ? '🆓' : '🔓';
      return `
        <div class="step-card" data-step="${step.n}">
          <div><span class="step-num">Step ${step.n}</span><span class="step-title">${step.title}</span></div>
          <span class="lock-icon">${icon}</span>
        </div>
        <div class="card free-step-content" id="step-content-${step.n}">${step.html}</div>
      `;
    }
    return `
      <div class="step-card locked" data-step="${step.n}" data-teaser="${escapeHtml(step.teaser || '')}" data-title="${escapeHtml(step.title)}">
        <div><span class="step-num">Step ${step.n}</span><span class="step-title">${step.title}</span></div>
        <span class="lock-icon">🔒</span>
      </div>
    `;
  }).join('');

  // Nascondi il banner di sblocco se la guida è già sbloccata
  const banner = document.getElementById('unlock-banner');
  if (banner) banner.style.display = unlocked ? 'none' : '';

  // Click su step bloccato -> mostra teaser in modale con invito a sbloccare
  list.querySelectorAll('.step-card.locked').forEach(card => {
    card.addEventListener('click', () => {
      openModal(`
        <h3>🔒 ${card.dataset.title}</h3>
        <p>${card.dataset.teaser || 'Contenuto disponibile sbloccando tutta la guida.'}</p>
        <button class="btn-primary" onclick="document.getElementById('btn-unlock-guide').click()">Sblocca tutta la guida — 20€</button>
      `);
    });
  });
}

function renderJobs() {
  const el = document.getElementById('jobs-preview');
  el.innerHTML = SAMPLE_JOBS.map(j => `
    <div class="job-card">
      <div>
        <div class="job-role">${j.role}</div>
        <div class="job-city">${j.city}</div>
      </div>
      <div class="job-status">${j.status}</div>
    </div>
  `).join('');
}

function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });
}

function setupModal() {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });
}

function openModal(html) {
  document.getElementById('modal-body').innerHTML = html;
  document.getElementById('modal').classList.remove('hidden');
}
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function setupUnlockButtons() {
  document.getElementById('btn-unlock-guide').addEventListener('click', () => {
    if (GUIDE_PAYMENT_LINK_URL) {
      window.location.href = GUIDE_PAYMENT_LINK_URL;
      return;
    }
    // Ramo demo, usato solo finché GUIDE_PAYMENT_LINK_URL è vuoto.
    openModal(`
      <h3>Pagamento (TEST)</h3>
      <p>Qui si collegherà il vero pagamento Stripe da 20€ (17€ promo). Per ora puoi
      simulare lo sblocco per testare l'esperienza.</p>
      <button class="btn-primary" id="btn-confirm-unlock-guide">Simula pagamento riuscito</button>
    `);
    document.getElementById('btn-confirm-unlock-guide').addEventListener('click', () => {
      setGuideUnlocked();
      closeModal();
      renderSteps();
    });
  });
  document.getElementById('btn-unlock-jobs').addEventListener('click', () => {
    if (JOBS_PAYMENT_LINK_URL) {
      window.location.href = JOBS_PAYMENT_LINK_URL;
      return;
    }
    // TODO: diventa un redirect reale appena JOBS_PAYMENT_LINK_URL è configurato.
    openModal(`<h3>Pagamento (demo)</h3><p>Qui si collegherà il pagamento reale da 7€ per il pacchetto di 10 posizioni verificate. Per ora è solo una simulazione.</p>`);
  });
}

// URL del Payment Link Stripe per la domanda a pagamento (5€). Lo configuriamo
// quando l'account Stripe è pronto: Lucy crea un Payment Link con un campo
// personalizzato "Scrivi qui la tua domanda" e incolla qui l'URL.
const QA_PAYMENT_LINK_URL = 'https://buy.stripe.com/dRm3cv21J6Ad0wDcaucwg02';

function setupQA() {
  const btn = document.getElementById('btn-ask-question');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (QA_PAYMENT_LINK_URL) {
      window.location.href = QA_PAYMENT_LINK_URL;
      return;
    }
    // TODO: rimuovere questo ramo demo appena QA_PAYMENT_LINK_URL è configurato.
    openModal(`
      <h3>Fai una domanda (TEST)</h3>
      <p>Qui il pulsante porterà al pagamento Stripe da 5€, dove scriverai la tua
      domanda in un campo dedicato durante il checkout. Dopo il pagamento, la
      domanda arriva a Lucy (dashboard Stripe), che risponde via email.</p>
    `);
  });
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

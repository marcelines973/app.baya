/* ═══════════════════════════════════════════
   LITHOTHÉRAPIE — app.js
   ═══════════════════════════════════════════ */

let activeFilter = 'Toutes';

/* ── Helpers ── */

function signSymbol(name) {
  return SIGN_SYMBOLS[name] || '✦';
}

function cardImgHTML(stone) {
  if (stone.img) {
    return `
      <div class="card-img">
        <img src="${stone.img}" alt="${stone.name}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\"placeholder\\">${stone.emoji}</div>'">
      </div>`;
  }
  return `<div class="card-img"><div class="placeholder">${stone.emoji}</div></div>`;
}

function modalImgHTML(stone) {
  if (stone.img) {
    return `
      <div class="modal-img">
        <img src="${stone.img}" alt="${stone.name}"
             onerror="this.parentElement.innerHTML='<div class=\\"placeholder\\">${stone.emoji}</div>'">
      </div>`;
  }
  return `<div class="modal-img"><div class="placeholder">${stone.emoji}</div></div>`;
}

/* ── Build filters ── */

function buildFilters() {
  const container = document.getElementById('filters');
  container.innerHTML = CATEGORIES.map((cat, i) => `
    <button class="filter-btn${i === 0 ? ' active' : ''}"
            onclick="setFilter('${cat}', this)">
      ${cat}
    </button>
  `).join('');
}

function setFilter(cat, btn) {
  activeFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

/* ── Render grid ── */

function render() {
  const query = document.getElementById('sq').value.toLowerCase().trim();
  const grid  = document.getElementById('grid');
  const nores = document.getElementById('nores');

  const filtered = STONES.filter(stone => {
    const matchQuery =
      !query ||
      stone.name.toLowerCase().includes(query) ||
      stone.desc.toLowerCase().includes(query) ||
      stone.signs.some(s  => s.toLowerCase().includes(query)) ||
      stone.vertus.some(v => v.toLowerCase().includes(query));

    const matchFilter =
      activeFilter === 'Toutes' ||
      stone.group.includes(activeFilter.toLowerCase());

    return matchQuery && matchFilter;
  });

  nores.style.display = filtered.length ? 'none' : 'block';

  grid.innerHTML = filtered.map(stone => {
    const idx       = STONES.indexOf(stone);
    const signsText = stone.signs
      .map(s => `${signSymbol(s)} ${s}`)
      .join('  ');

    return `
      <article class="card" role="listitem"
               onclick="openModal(${idx})"
               tabindex="0"
               onkeydown="if(event.key==='Enter')openModal(${idx})"
               aria-label="${stone.name}">
        ${cardImgHTML(stone)}
        <div class="card-body">
          <div class="card-name">${stone.name}</div>
          <div class="card-signs">${signsText}</div>
        </div>
      </article>`;
  }).join('');
}

/* ── Modal ── */

function openModal(index) {
  const stone = STONES[index];
  const box   = document.getElementById('mbox');

  const vertusHTML = stone.vertus
    .map(v => `<span class="tag" style="background:${stone.tagBg};color:${stone.tagTx}">${v}</span>`)
    .join('');

  const chakrasHTML = stone.chakras
    .map(c => `
      <div class="chakra-row">
        <div class="chakra-dot" style="background:${c.c}"></div>
        <span class="chakra-name">${c.n}</span>
      </div>`)
    .join('');

  const signsHTML = stone.signs
    .map(s => `<span class="sign-tag">${signSymbol(s)} ${s}</span>`)
    .join('');

  box.innerHTML = `
    ${modalImgHTML(stone)}
    <div class="modal-hd">
      <h2 id="modal-title">${stone.name}</h2>
      <p class="origin">📍 ${stone.origin}</p>
    </div>
    <div class="modal-bd">
      <div class="section">
        <div class="section-title">Description &amp; histoire</div>
        <p class="desc">${stone.desc}</p>
      </div>
      <div class="section">
        <div class="section-title">Vertus principales</div>
        <div class="tags">${vertusHTML}</div>
      </div>
      <div class="section">
        <div class="section-title">Chakras associés</div>
        ${chakrasHTML}
      </div>
      <div class="section">
        <div class="section-title">Signes du zodiaque</div>
        <div class="sign-row">${signsHTML}</div>
      </div>
      <div class="section">
        <div class="section-title">Purification recommandée</div>
        <p class="purif-text">✨ ${stone.purif}</p>
      </div>
      <button class="close-btn" onclick="closeModal()">Fermer</button>
    </div>`;

  document.getElementById('ov').classList.add('open');
  document.body.style.overflow = 'hidden';
  box.scrollTop = 0;
}

function closeModal(event) {
  const overlay = document.getElementById('ov');
  if (!event || event.target === overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ── Keyboard shortcut ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── Init ── */
buildFilters();
render();

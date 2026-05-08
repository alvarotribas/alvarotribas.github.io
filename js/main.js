// ── Navigation ────────────────────────────────────────────────
const navLinks = document.querySelectorAll('.nav-links a');
const pages    = document.querySelectorAll('.page');

function navigate(target) {
  pages.forEach(p => p.classList.toggle('active', p.id === target));
  navLinks.forEach(a => a.classList.toggle('active', a.dataset.page === target));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', '#' + target);
}

navLinks.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    navigate(a.dataset.page);
  });
});

// Load from URL hash on first visit
const hash = location.hash.replace('#', '');
navigate(hash && document.getElementById(hash) ? hash : 'home');

// ── Publication filter ─────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const pubItems   = document.querySelectorAll('.pub-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    pubItems.forEach(item => {
      item.style.display = (f === 'all' || item.dataset.type === f) ? '' : 'none';
    });
  });
});

// ── Other cards (accordion) ───────────────────────────────────
function toggleCard(card) {
  card.classList.toggle('open');
}
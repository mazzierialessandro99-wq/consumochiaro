// Funzioni condivise dai calcolatori
const euro = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' });
const num = (n, d = 1) => new Intl.NumberFormat('it-IT', { maximumFractionDigits: d }).format(n);

function val(id) {
  const v = parseFloat(String(document.getElementById(id).value).replace(',', '.'));
  return Number.isFinite(v) && v >= 0 ? v : 0;
}
function put(id, text) { document.getElementById(id).textContent = text; }

// Ricalcola a ogni modifica dei campi del form
function live(formId, fn) {
  const f = document.getElementById(formId);
  f.addEventListener('input', fn);
  f.addEventListener('change', fn);
  f.addEventListener('submit', e => { e.preventDefault(); fn(); });
  fn();
}

document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

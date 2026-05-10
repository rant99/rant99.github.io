// Abstract toggle — available globally if needed outside research page
function toggleAbstract(btn) {
  const panel = btn.closest('.paper-actions').nextElementSibling;
  const isOpen = panel.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.textContent = isOpen ? 'Abstract ↑' : 'Abstract';
}

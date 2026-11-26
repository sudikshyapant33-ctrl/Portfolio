// The image links also work without JavaScript. Enhance them with an accessible viewer.
const dialog = document.querySelector('#lightbox');
const fullImage = document.querySelector('#lightbox-image');
const caption = document.querySelector('#lightbox-caption');
const closeButton = document.querySelector('#close-lightbox');
let previousFocus = null;
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('.photo').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      previousFocus = link;
      fullImage.src = link.href;
      fullImage.alt = link.querySelector('img').alt;
      caption.textContent = link.closest('article').querySelector('h3').textContent;
      dialog.showModal();
      closeButton.focus();
    });
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { fullImage.removeAttribute('src'); previousFocus?.focus(); });
}

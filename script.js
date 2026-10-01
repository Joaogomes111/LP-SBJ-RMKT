'use strict';

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navegacao');
function closeMenu() { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menu'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; nav.classList.toggle('open', open); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });

document.querySelectorAll('[data-video-id]').forEach(container => {
  container.querySelector('.video-play').addEventListener('click', event => {
    // Arquivos locais e prévias sem JavaScript usam o link direto do YouTube.
    if (!['http:', 'https:'].includes(location.protocol) || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const frame = document.createElement('iframe');
    const videoUrl = new URL(`https://www.youtube-nocookie.com/embed/${container.dataset.videoId}`);
    videoUrl.search = new URLSearchParams({ autoplay: '1', rel: '0', origin: location.origin }).toString();
    frame.src = videoUrl.toString();
    frame.title = container.dataset.videoTitle;
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    container.replaceChildren(frame);
    event.preventDefault();
  });
});

const privacyDialog = document.querySelector('#privacy-dialog');
document.querySelectorAll('.privacy-trigger').forEach(button => button.addEventListener('click', () => privacyDialog.showModal()));
privacyDialog.querySelector('.dialog-close').addEventListener('click', () => privacyDialog.close());
privacyDialog.addEventListener('click', event => { if (event.target === privacyDialog) { const r = privacyDialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) privacyDialog.close(); } });


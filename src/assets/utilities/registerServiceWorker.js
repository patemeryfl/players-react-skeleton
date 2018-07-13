/* eslint-env browser */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./sw.js')
      .then(() => console.log('service worker registered!'))
      .catch(() => console.log('failed to register service worker!'));
  });
}

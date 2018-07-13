/* eslint-env browser */

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js');
    });
  }
};

export default registerServiceWorker;


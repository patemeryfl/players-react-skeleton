/* eslint no-restricted-globals: 0 */

self.addEventListener('install', (event) => {
  // Put offline.html page into cache
  const offlineRequest = new Request('offline.html');
  event.waitUntil(fetch(offlineRequest).then(response => caches.open('offline').then(cache =>
    cache.put(offlineRequest, response))));
});

self.addEventListener('fetch', (fetchEvent) => {
  const req = fetchEvent.request;
  if (req.method === 'GET') {
    fetchEvent.respondWith(fetch(req).catch(() =>
      caches
        .open('offline')
        .then(cache => Promise.resolve(cache.match('offline.html')))));
  }
});

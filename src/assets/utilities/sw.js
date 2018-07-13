/* eslint no-restricted-globals: 0 */

self.addEventListener('install', (event) => {
  // Put offline.html page into cache
  const offlineRequest = new Request('offline.html');
  event.waitUntil(fetch(offlineRequest).then(response => caches.open('offline').then((cache) => {
    console.log(
      '[Service Worker][onInstall] Cached offline page ',
      response.url,
    );
    return cache.put(offlineRequest, response);
  })));
});

self.addEventListener('fetch', (fetchEvent) => {
  const req = fetchEvent.request;
  if (req.method === 'GET') {
    fetchEvent.respondWith(fetch(req).catch((err) => {
      console.log(`error fetching ${err}`, req.url);
      return caches
        .open('offline')
        .then(cache => Promise.resolve(cache.match('offline.html')));
    }));
  }
});

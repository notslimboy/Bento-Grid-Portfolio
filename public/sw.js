const CACHE_NAME = 'raka-portfolio-offline-v3';
const OFFLINE_PAGE = new URL('offline.html', self.registration.scope).href;
const CACHE_FALLBACK = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title><style>body{margin:0;display:grid;min-height:100dvh;place-items:center;background:#070913;color:#eef2ff;font:16px system-ui,sans-serif}main{max-width:34rem;padding:2rem}h1{margin:0 0 .75rem;font-size:2rem}p{margin:0;color:#b8c4dd;line-height:1.6}</style><main><h1>Connection lost</h1><p>This page is offline. Reconnect and try again.</p></main></html>`;

self.addEventListener('install', (event) => {
  event.waitUntil(
      caches
        .open(CACHE_NAME)
        .then((cache) => cache.add(OFFLINE_PAGE))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode !== 'navigate') return;

  event.respondWith(
    (async () => {
      try {
        return await fetch(event.request);
      } catch {
        const offlinePage = await caches.match(OFFLINE_PAGE, { ignoreSearch: true });

        return offlinePage || new Response(CACHE_FALLBACK, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
    })(),
  );
});

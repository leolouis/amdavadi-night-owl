const VERSION = 'v1';
const SHELL = `night-owl-shell-${VERSION}`;
const DATA = `night-owl-data-${VERSION}`;
const SHELL_FILES = [
  './', 'index.html', 'config.js', 'manifest.webmanifest',
  'css/style.css', 'css/animations.css',
  'js/app.js', 'js/map.js', 'js/markers.js', 'js/filter.js',
  'js/roulette.js', 'js/geolocation.js', 'js/alerts.js', 'js/utils.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => Promise.allSettled(SHELL_FILES.map((f) => c.add(f)))));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== SHELL && k !== DATA).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // tiles, CDNs, GitHub API go straight to network

  if (url.pathname.endsWith('places.json')) {
    // network first, so data stays fresh; cache is the offline fallback
    e.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(DATA).then((c) => c.put(req, copy)); return res; })
        .catch(() => caches.match(req))
    );
    return;
  }
  // everything else: serve from cache, refresh in background
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      const net = fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(SHELL).then((c) => c.put(req, copy)); return res; })
        .catch(() => cached || caches.match('index.html'));
      return cached || net;
    })
  );
});

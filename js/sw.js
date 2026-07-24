// sw.js
const CACHE_NAME = "night-owl-v1";
const ASSETS = [
    "./",
    "./index.html",
    "./css/style.css",
    "./css/animations.css",
    "./js/app.js",
    "./js/map.js",
    "./js/markers.js",
    "./js/geolocation.js",
    "./js/utils.js",
    "./places.json",
    "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
    "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

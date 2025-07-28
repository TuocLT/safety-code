const CACHE_NAME = "qr-safety-cache-v1";
const urlsToCache = [
  "/safety-code/",
  "/safety-code/index.html",
  "/safety-code/manifest.json",
  "/safety-code/service-worker.js",
  "https://i.postimg.cc/1XtJX4Zx/Superqr-svg.png",
  "https://i.postimg.cc/N01Hhdcn/ok.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

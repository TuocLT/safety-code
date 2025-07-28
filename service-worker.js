self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Installed');
});

self.addEventListener('activate', function (event) {
  console.log('[ServiceWorker] Activated');
});

self.addEventListener('fetch', function (event) {
  // Cache-first or network-first strategy có thể thêm sau nếu cần
});

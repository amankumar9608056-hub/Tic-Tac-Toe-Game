const cacheName = "tictactoe-v1";
const assets = ["index.html", "style.css", "script.js", "😊"];

// Files ko cache mein save karna
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// Offline mode mein files ko load karna
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
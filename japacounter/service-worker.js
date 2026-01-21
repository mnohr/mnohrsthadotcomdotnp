self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("japa-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js"
      ]);
    })
  );
});

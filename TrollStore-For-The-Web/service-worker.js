//Copying or selling this code is strictly prohibited
//Written by @Outland3r2007
const CACHE_NAME = "tweakra1n";
self.addEventListener("install", (s) => {
  s.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((s) =>
        s.addAll([
          "/",
          "app.html",
          "css/styles.css",
          "core.js",
          "apps.json",
          "./cdn.jsdelivr.net/npm/framework7@8/framework7-bundle.min.js",
          "manifest.json",
          "./cdn.jsdelivr.net/npm/framework7-icons@5.0.5/css/framework7-icons.css",
        ])
      )
  );
}),
  self.addEventListener("fetch", (s) => {
    s.respondWith(
      fetch(s.request)
        .then((e) => {
          const t = e.clone();
          return caches.open(CACHE_NAME).then((e) => e.put(s.request, t)), e;
        })
        .catch(() => caches.match(s.request))
    );
  });

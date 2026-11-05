// UGC NET War Room service worker: makes the app installable and usable offline.
const CACHE = "war-room-v2";
const PRECACHE = ["/", "/daily", "/paper1", "/paper2", "/chronology", "/question-lab", "/jrf-2027"];

self.addEventListener("install", (event) => {
  // Cache every page plus the JS/CSS it needs, so the whole app works offline.
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.allSettled(
        PRECACHE.map(async (url) => {
          const res = await fetch(url, { cache: "no-store" });
          if (!res.ok) return;
          const html = await res.clone().text();
          await cache.put(url, res);
          const assets = [...new Set(html.match(/\/_next\/static\/[^"'\s)]+/g) || [])];
          await Promise.allSettled(assets.map((a) => cache.add(a)));
        })
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Pages: network first so content stays fresh, cached copy when offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() => caches.match(request).then((r) => r || caches.match("/")))
    );
    return;
  }

  // Static assets: cache first, then network (build files are content-hashed).
  if (url.pathname.startsWith("/_next/static/") || /\.(png|svg|ico|woff2?)$/.test(url.pathname)) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(request, copy));
            return res;
          })
      )
    );
    return;
  }

  // Everything else (RSC payloads etc.): network, fall back to cache.
  event.respondWith(
    fetch(request)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(request, copy));
        }
        return res;
      })
      .catch(() => caches.match(request))
  );
});

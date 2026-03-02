const CACHE_NAME = 'oddoner-cache-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
];

// Instalación y almacenamiento en caché de archivos base
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Estrategia: Primero buscar en red, si falla, ir al caché
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

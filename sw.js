const CACHE_NAME = 'lpic2-sim-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/main.css',
    './js/main.js',
    './js/LPIC2-2-450.js',
    './js/LPIC2-2-450-EN.js',
    './js/LPI-202-400-12.35.js',
    './js/LPI-202-400-12.35-EN.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// Instalación: Guarda los archivos en caché
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Archivos en caché correctamente');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activación: Limpia cachés antiguas si cambias la versión
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                .map(name => caches.delete(name))
            );
        })
    );
});

// Intercepta las peticiones: Sirve desde caché si no hay red
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            // Devuelve la versión en caché o intenta descargarla de la red
            return response || fetch(event.request);
        }).catch(() => {
            // Si todo falla (offline puro), devuelve nada o un recurso de fallback
        })
    );
});
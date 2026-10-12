/* Service worker mínimo: permite instalar la aplicación en la pantalla de inicio del móvil / tablet.
   No guarda nada en caché ni intercepta peticiones: la aplicación sigue necesitando conexión y siempre muestra la última versión. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* red directa */ });

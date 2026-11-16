// Samåk – minimal service worker. Gör appen installerbar.
// Cachar ingenting: allt hämtas alltid färskt från nätet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

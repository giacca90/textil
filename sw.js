const CACHE_NAME = 'textil-cache-v1';
const IMAGE_CACHE_NAME = 'textil-images-v1';

// Recursos estáticos básicos
const STATIC_ASSETS = ['./', './favicon.ico', './favicon.svg'];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(STATIC_ASSETS);
		}),
	);
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(keys.filter((key) => key !== CACHE_NAME && key !== IMAGE_CACHE_NAME).map((key) => caches.delete(key)));
		}),
	);
});

self.addEventListener('fetch', (event) => {
	const {request} = event;
	const url = new URL(request.url);

	// Estrategia para imágenes (Cache First, luego Network)
	if (request.destination === 'image' || url.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
		event.respondWith(
			caches.open(IMAGE_CACHE_NAME).then((cache) => {
				return cache.match(request).then((response) => {
					return (
						response ||
						fetch(request).then((networkResponse) => {
							// Solo cacheamos si la respuesta es válida
							if (networkResponse.ok || networkResponse.type === 'opaque') {
								cache.put(request, networkResponse.clone());
							}
							return networkResponse;
						})
					);
				});
			}),
		);
		return;
	}

	// Estrategia para el resto (Network First con fallback a cache)
	event.respondWith(fetch(request).catch(() => caches.match(request)));
});

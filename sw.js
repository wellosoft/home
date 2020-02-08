// use a cacheName for cache versioning
var cacheName = 'v1:static';

self.addEventListener('beforeinstallprompt', function(e) {
	// TO DO
});

// during the install phase you usually want to cache static assets
self.addEventListener('install', function(e) {
    // once the SW is installed, go ahead and fetch the resources to make this work offline
    e.waitUntil(
        caches.open(cacheName).then(async function(cache) {
            await cache.addAll([
                './',
                './cv/',
                './asset-store/',
                './vendor/jquery/jquery-3.4.1.min.js',
                './vendor/bootstrap/js/bootstrap.min.js',
                './vendor/bootstrap/css/bootstrap.min.css',
                './vendor/font-awesome/css/font-awesome.min.css',
                './style.css',
            ]);
            self.skipWaiting();
        })
    );
});

// when the browser fetches a url
self.addEventListener('fetch', function(event) {
    // either respond with the cached object or go ahead and fetch the actual url
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});

const staticCacheName = 'cache-v2';
const assets = [
    '/',
    '/index.html'
];

// add cached files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assets)
        })
    )
});

// set and get cache
self.addEventListener('fetch', function (event) {
    //console.log(event.request);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // return response cached
            if (response) {
                return response;
            }

            var fetchRequest = event.request.clone();
            return fetch(fetchRequest).then(function (response) {
                // error case
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                // caching
                var responseToCache = response.clone();
                caches.open(staticCacheName).then(function (cache) {
                    cache.put(event.request, responseToCache);
                });
                return response;
            }
            );
        })
    );
});

// delete old cache keys
self.addEventListener('activate', function (event) {
    var cacheWhitelist = [staticCacheName];
    event.waitUntil(
        // check all cache keys
        caches.keys().then(function (cacheKeys) {
            return Promise.all(
                cacheKeys.map(function (cacheKey) {
                    if (cacheWhitelist.indexOf(cacheKey) === -1) {
                        return caches.delete(cacheKey);
                    }
                })
            );
        })
    );
});

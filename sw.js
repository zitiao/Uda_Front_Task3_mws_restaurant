// 缓存
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cach0').then(function(cache) {
      return cache.addAll([//需要缓存的文件
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/css/responsive.css',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        'sw.js',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
      ]);
    })
  );
});

// 缓存更新
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== 'cach0') {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 捕获请求并返回缓存数据
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(response) {
    caches.open('cach0').then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }));
});
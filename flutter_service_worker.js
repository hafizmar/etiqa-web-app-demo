'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cebf46e1150715f6c4d6b39d3b9eb6c2",
"version.json": "5bfd2a801d2e1c09a0779aa34c9eeba2",
"index.html": "2679efd88a2019d8734ee3f4ddf70a49",
"/": "2679efd88a2019d8734ee3f4ddf70a49",
"main.dart.js": "8d88981f1b26ee27a28399e20c500def",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5bc78499634cea30962e1cb932d6bd95",
"icons/Icon-192.png": "6fb1616c6e3641541074474e9f10517b",
"icons/Icon-maskable-192.png": "6fb1616c6e3641541074474e9f10517b",
"icons/Icon-maskable-512.png": "8ccb84e82cdf22f25f441967e939cb0d",
"icons/Icon-512.png": "8ccb84e82cdf22f25f441967e939cb0d",
"manifest.json": "7167f84244155381bfec687759ba1c84",
".git/ORIG_HEAD": "c349200939af83898def165eec6c9b5a",
".git/config": "0f9c1ff200d77e41a6923625630c8f96",
".git/objects/61/882beb25509264ba4a5aedb09c9a239f95362f": "96f997362caeaa0929dd260242f28722",
".git/objects/6a/e7291667483a5752d602478d2d51ba45c7ae98": "eaa3e0f31bf02590ec7e160baad75e50",
".git/objects/35/ae58ce1d752409dd32485f256a5ef3b5f0bfa5": "b86977be05b5021c524b84eca10490ae",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/35/2863929e4e1d9c56030c9a902fd5621758b818": "c8300d93f909008a62f7e8224ea8e241",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/639444464cbd0dc837c20864b4ba08e7a76488": "586ff4c71afb5f22b1cb8daa1128b477",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/d9/5187b62e7aa94e1ba85ebeddcbfe55831f27f4": "54050888e6f34836ef90f70be55ce526",
".git/objects/d0/6cc39a032633327dd00c8e6972300a1b980fbb": "8c7a4437a8bab59c8df0f72791d1c8e1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/d96c4072030074fa914e8127b39daf7c72a7b6": "8f61027f7d7a0296dab29a72eb6cadaf",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/d8ad98c26181f40296a47916031ad71a5906ff": "5a7f7415a4f8cde9e6c9d5c749ad2047",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/e5/0547052290902af845002dc1b02b3d0c874681": "1d0acaec9b5e207162843f48681a15b9",
".git/objects/f3/ba93c57ab0b79992f54739a88acbfae8e59cc5": "551eb8da1c94ff81f85b4e085df03d19",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/7794dad5b66ae474b9f21d893cb853cd2ca41f": "a45c410f5d0e9a21528a269834c408db",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c3598116cdb2fd61fda60bffae30d7b8c23e77": "e78f9740ed82d9f37a7ca11a44bec94d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/8f064b037c273a5d921fa777a6dff1201bf06d": "fe0314b8871d987f9b48b3f0f5f58fb3",
".git/objects/26/e077e0fe16b2f69982671441dd97eb533d4c32": "50c084b7b19cb0c2b68c4ffaec5956ed",
".git/objects/75/537ee8dea055fa5653cb3b9215438898375b2b": "208fd3f8562e8e2fe93e1d22aa16eba3",
".git/objects/72/69f17e56ebc7e73ae66dea485a5a6c4ab3ad00": "db35e58475a22a5fee48f71872a82e1d",
".git/objects/6b/6aeab0937c2d219e5f527b85a4c5c9c3a247f6": "b0bf8f91e47c92a452311f6d5eb7a791",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5e/bf65ef018fb605e8856ba658082d3cbc3ed74a": "8ad2897822c9ba45a8c81ddfada5da49",
".git/objects/6d/1845bdf04945e037b3e5b523ef3306d270fa58": "ee58f3016086166b8d9c92be90a49791",
".git/objects/6c/9086fbd12a4d9b30aef6da3af86cf07f460ce8": "969b2749396c8fccf9b483e070bae137",
".git/objects/d3/f3fcf98cb274b29278ad183fd9ffc9b22c6c4d": "f6b9048b42ba565dc4702fcc8913fc60",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ef/1cdb047f5739a8850837afd8940912699626ff": "961f448b35b4f3a8b6bb79a60f9c106b",
".git/objects/f9/5af154d7ba521369ab6ec84203d29a339c813f": "bcf54078a2cefa9ec284bb1d988f00ad",
".git/objects/f9/3d3fed0a5478efd237d9ab64d3312356d73ffe": "435e664c3affa5b1cd24d8a4e2f708fe",
".git/objects/fa/5db7470c4791a9356f6a6108371e11bb74b6b1": "3d1d72bee0846f022fc4851edc2d154a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/3b3ce7f2e60e21a17cd96583e9ce0d1bccafb2": "1ddb81f6285dd6103f528e1e8f4667bc",
".git/objects/12/2b3ac1449699883fd299126b89a343327f5295": "485bf7e328f03767b292c2a9f3ff484b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1ecbb34a3652ec7efefa238d752ad2a",
".git/logs/refs/heads/main": "b6c7c50583b2b00c1632269c01f67e0b",
".git/logs/refs/remotes/origin/main": "50dd9bb578e5023f630595b2b15b99d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c349200939af83898def165eec6c9b5a",
".git/refs/remotes/origin/main": "c349200939af83898def165eec6c9b5a",
".git/index": "91cf00b97e47765f791a5cbc4ef1f284",
".git/COMMIT_EDITMSG": "80b0532e6aabe27825faeed63ac5e52c",
".git/FETCH_HEAD": "d66a04e25035cf13198afeb91c82e5b8",
"assets/AssetManifest.json": "dd2393226863f63bebc26ac9ff792e05",
"assets/NOTICES": "32fd02394e38d2a5ac0bc15d76009eab",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e2bb8b82171bd699ef7c2efd01cba40b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "cfa4fef35bd532bc7fdb3a00d5ec26ca",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ac33fd96cb36d9758a21ae771c3cd121",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/etiqa_white.png": "e178cd5661a17816de42f222be2b3ec9",
"assets/assets/etiqa.png": "998e5d89fea8d7a1382c66088c551525",
"assets/assets/etiqa_ori.png": "2186d20eaec5d04ca0e51edb9a8f3aa7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

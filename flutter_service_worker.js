'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9d76db6527ac4bce782ed8944aa0f004",
"version.json": "5bfd2a801d2e1c09a0779aa34c9eeba2",
"index.html": "2679efd88a2019d8734ee3f4ddf70a49",
"/": "2679efd88a2019d8734ee3f4ddf70a49",
"main.dart.js": "2c0f27406ffdc645fa1eb129e7b80606",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5bc78499634cea30962e1cb932d6bd95",
"icons/Icon-192.png": "6fb1616c6e3641541074474e9f10517b",
"icons/Icon-maskable-192.png": "6fb1616c6e3641541074474e9f10517b",
"icons/Icon-maskable-512.png": "8ccb84e82cdf22f25f441967e939cb0d",
"icons/Icon-512.png": "8ccb84e82cdf22f25f441967e939cb0d",
"manifest.json": "7167f84244155381bfec687759ba1c84",
".git/ORIG_HEAD": "d02e2e4d2ce7ccef823a4abc2187ac0a",
".git/config": "0f9c1ff200d77e41a6923625630c8f96",
".git/objects/61/882beb25509264ba4a5aedb09c9a239f95362f": "96f997362caeaa0929dd260242f28722",
".git/objects/92/828f01935d425b995ec1245faf084089466a5c": "d12be1bae821c8f0db3052d589d092de",
".git/objects/03/4f18a36c834ea697a27f09880ed6c04c459b9c": "1e0ee3294ebd36ebefc59be6ba2d6c90",
".git/objects/9e/3f644dec39a891831460f6743e699d08cfe681": "bf6133832caa647936fb39e8fb1c4810",
".git/objects/04/de3ba326aa258066efb559d1c5d17c5e8a9cda": "d6522a663fedba96e9193dbe305d5549",
".git/objects/6a/e7291667483a5752d602478d2d51ba45c7ae98": "eaa3e0f31bf02590ec7e160baad75e50",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/35/2863929e4e1d9c56030c9a902fd5621758b818": "c8300d93f909008a62f7e8224ea8e241",
".git/objects/3c/e6e9be885a4504e254dfc0fa1c2c56a9459d66": "6dbf0a256d9b8d41cec1cbe4f3bef1f6",
".git/objects/3d/f3aa3c6b2d462a67cd03d17a8f3a08edf539e6": "e9f3659d3bebd37a09c6e27515ac34ce",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/639444464cbd0dc837c20864b4ba08e7a76488": "586ff4c71afb5f22b1cb8daa1128b477",
".git/objects/93/0ce93bba4c8e337da7dad809003d3f9c0a7e83": "4df33a32e40ceddbeec866a6c33d0788",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/be9d6e591e0e043b2aa64b72073eb7d8037099": "a83372a245a74dd06aa7f75e7b5abe56",
".git/objects/9d/32b8bb625433d313c6594b1a48356c88fc02e6": "72c5ef523928b3afacaa95be09f16e47",
".git/objects/b2/56cdd338dfb975708d8364ca974a977a429fa0": "3ba342e447719aec086da5ac820eef9b",
".git/objects/d9/5187b62e7aa94e1ba85ebeddcbfe55831f27f4": "54050888e6f34836ef90f70be55ce526",
".git/objects/d0/6cc39a032633327dd00c8e6972300a1b980fbb": "8c7a4437a8bab59c8df0f72791d1c8e1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/d96c4072030074fa914e8127b39daf7c72a7b6": "8f61027f7d7a0296dab29a72eb6cadaf",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/ae/378c1bdc75a1d67fd4e5b92211f014608b1ec0": "32475b61d181220ccbab639329a32b12",
".git/objects/e5/0547052290902af845002dc1b02b3d0c874681": "1d0acaec9b5e207162843f48681a15b9",
".git/objects/f4/7a284bfc27e425d0c3075d10ec9e6ddcefb625": "68b452f2c4e6cf8195cfa75f145efa31",
".git/objects/f3/ba93c57ab0b79992f54739a88acbfae8e59cc5": "551eb8da1c94ff81f85b4e085df03d19",
".git/objects/c0/fe0e790eeae45269218b2fef950a476f85df74": "7c8ff16696a8d41226715bcad8207341",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c3598116cdb2fd61fda60bffae30d7b8c23e77": "e78f9740ed82d9f37a7ca11a44bec94d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/4e/c69307b18a70160abcb9d65ad6645ddc7241be": "90d09d61b9425c4061eed253d4b7d35b",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/c659bc709f3f294b2c4fc503b5355f999f5d91": "8b5a2888545bc790ff77b8fdc14fb85e",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/71989983c3511430f44e796b030c28aed5f128": "ef1aaed3dd5ab8840d74f6096105914f",
".git/objects/73/18171198ac73b22869544ed5f10547d2c8b6d8": "4e3f152f3a68b984c5dd6a1482ab5f40",
".git/objects/80/8f064b037c273a5d921fa777a6dff1201bf06d": "fe0314b8871d987f9b48b3f0f5f58fb3",
".git/objects/26/e077e0fe16b2f69982671441dd97eb533d4c32": "50c084b7b19cb0c2b68c4ffaec5956ed",
".git/objects/75/537ee8dea055fa5653cb3b9215438898375b2b": "208fd3f8562e8e2fe93e1d22aa16eba3",
".git/objects/72/69f17e56ebc7e73ae66dea485a5a6c4ab3ad00": "db35e58475a22a5fee48f71872a82e1d",
".git/objects/72/3494d6f38eb365304264e3e4491dcab5b6a170": "e73ed7c46863454066d008a566b1069a",
".git/objects/9f/4ba34b530a43c844dda93580d5cb552ee376fd": "b72c6f3126ad3342d22cf53a80c7cb64",
".git/objects/9f/84d218a40912de3e9674c4e7572a44d108c104": "86b8b93f44fc3a6f0b8f8d2b19e77185",
".git/objects/6b/6aeab0937c2d219e5f527b85a4c5c9c3a247f6": "b0bf8f91e47c92a452311f6d5eb7a791",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/65/263a0ad8bdea064b93b86d18b4fec514893603": "14f0c9a102a3fc7b839c0703084df3bb",
".git/objects/3a/5f9288a1bca4787bae993e6adc78aa1a547eb5": "d66cb49570d777659266d935458d6d3f",
".git/objects/98/21984713f9e64d9624284f34da21a7085dd10d": "22976ed53267e2e8513edda2715a3dd9",
".git/objects/53/1ba54aece7010fff5da013ac944746f0aae745": "4b83ceab122a6d0ede37589d909e8f54",
".git/objects/5e/bf65ef018fb605e8856ba658082d3cbc3ed74a": "8ad2897822c9ba45a8c81ddfada5da49",
".git/objects/37/0f5a42ecbbf79daf55bb3fbb8dd4d2f564fca5": "3dc8f0102b4384f9fe20b1da3b036f4c",
".git/objects/6c/9086fbd12a4d9b30aef6da3af86cf07f460ce8": "969b2749396c8fccf9b483e070bae137",
".git/objects/99/eb6093311ac4bb95c830ebb303e74cb08c482b": "dba39760414f5e5053d3009248098239",
".git/objects/52/126567d3b6fbc153adc4f837c510690658f9c6": "4226805e440b8051a3f1245e9de1aaf4",
".git/objects/0f/f6aac6576d6bb11721b0ab3c713ec0de90e75f": "8e8e925b75ecd2f27a9d9710b4e2661a",
".git/objects/d3/f3fcf98cb274b29278ad183fd9ffc9b22c6c4d": "f6b9048b42ba565dc4702fcc8913fc60",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/81ef2f777f7b9dd206364a3bd31dee1a9bd682": "7723a055b1c16f25f5b9de103dc516fd",
".git/objects/aa/e46a1b7c9433261098f04b2b34e3c7b2c979a0": "84bed370b7ab4bfc20ca9687ef4fd735",
".git/objects/b7/9f13a6c09ea012d88535e28b8942fd60031d56": "6b9c8039d867e6e81ec59f637d765812",
".git/objects/b7/19f2faddde9f1a4f4801e442c8918db5388e99": "b71e7cb15b3326308af010ba23bcc720",
".git/objects/a1/972964c1e4d4e09801663ea86948d3d1e8151d": "359dac77516c03df6f73b72342b84dc7",
".git/objects/a1/51e73a107d721d6ddb64a4e2d25df45d137b40": "125cb2ead3321c2c7d26b2e034d9b396",
".git/objects/f9/5af154d7ba521369ab6ec84203d29a339c813f": "bcf54078a2cefa9ec284bb1d988f00ad",
".git/objects/f9/3d3fed0a5478efd237d9ab64d3312356d73ffe": "435e664c3affa5b1cd24d8a4e2f708fe",
".git/objects/f0/ee6688c406f78d798018c11468d05ea92915e5": "a8cdb1674a662bb4012260b0ef638185",
".git/objects/c5/cbb134e4e9a48957f327d424bcd5e8442548e1": "a825013386f188012d5cff91b497223a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/790b669fdf3a9c7a20d15cd69600082ca941a7": "8e14c3978f2de4da1cf53a867ce91549",
".git/objects/12/2b3ac1449699883fd299126b89a343327f5295": "485bf7e328f03767b292c2a9f3ff484b",
".git/objects/71/22e26a812086b8a5d897c82c688e842ab27b63": "e822a79fba9e63348100cd1f817ac300",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/6165fac64453a11ebfac1d0a868100cb74989c": "e49481b42c36d3da90a2b5ca0f48c03d",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/aaf8abe0268a0659c1d136ad427f531e63dcd0": "b04a7b0b2ea2026b60489974071ad9c7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eff4dc0a08514fc7d4a0559f271a2c5f",
".git/logs/refs/heads/main": "e253d1cd838c5694c16da95fff84c8fc",
".git/logs/refs/remotes/origin/main": "f0870ea0dc7a269aaab6f146d25c66ba",
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
".git/refs/heads/main": "d02e2e4d2ce7ccef823a4abc2187ac0a",
".git/refs/remotes/origin/main": "d02e2e4d2ce7ccef823a4abc2187ac0a",
".git/index": "d63b9ff38bbe38549c12ec9ae7be4c85",
".git/COMMIT_EDITMSG": "cad6e9f5464156c7f7120a2088e7bdae",
".git/FETCH_HEAD": "1fe9566813b2a0618fa6e555555eee1d",
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

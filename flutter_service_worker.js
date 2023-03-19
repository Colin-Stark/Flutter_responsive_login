'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "04f5256fe3a0595c2ddc58d6ac436bc1",
".git/config": "a8de7316d4c05738ecab52f7b29440e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "50b1cb49fc19aa105a9c06fa3b64f7eb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "635dfdfae7554c1c7d894de54a7a4e4e",
".git/logs/refs/heads/dev": "82850eade65bc4b4b9439233996e3d92",
".git/logs/refs/remotes/origin/dev": "9010fad939d5a138480ef6368a157104",
".git/objects/02/ee3ef08d2834b4968e0c470a62ae5b86b6eb02": "40c59613e5dd836d08cc54122e25d94a",
".git/objects/08/73afe9436690259be4ce41033b2eaeef09a096": "1e061a558610b2f490598794e5294c27",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/c7ad4350e49421d4288299c0c3060b6f3eab96": "74fc2bf612985fba8cf67224e398cee9",
".git/objects/17/07fa3bca14f830b3811998063aee054598dacd": "3181265cb99624ebed95d2d8b3efbb9e",
".git/objects/20/1b330c3f6ac0bcc146c102483c3148f7acd51c": "e120242d2bdcbfde9e5dbd7010afd0a8",
".git/objects/24/fd6110fcba7dcb1d0cad2f0fc8dec734d87d39": "4ef2c83d7e79239881411b20fd942d6f",
".git/objects/2f/7b52b8b44d67a9e1de7b506fce1c605b4962b7": "ee2ad6beb339ecdb1b119db2c9daf2d6",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/4a3703681dd1f9dc2b0ec0dbec044f1cf8500c": "899c82089750eaa15c22b578308296d7",
".git/objects/3d/4c7c3b3e4cbcdaa3c58e07654285209d9a7943": "d0ace9eab4df06e5119bee4f9733f772",
".git/objects/41/d7580ebf1f06d49810c00d9080c569e8cd7638": "10ad847bf491826cb1c05dcc6b3482a3",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/1172eb214f84c5586b527f74f9dfcff6961b4e": "e1b61edb0365d097ca94b89cc424d7af",
".git/objects/4e/bf305149c69ccfabcf4c6a87cae5c5b3312f4d": "91d006245ddaf8b860bbc8d0fd57d305",
".git/objects/54/d55e0b02a165a9a97ce3d336a190dbc2041170": "1255f714d7db27aac1f7463d46ada0d7",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5e/098096a0930777907dc944e4c0b95d94ac5135": "20d1a06096f8ca630ec4af78c1602dc2",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/6caea5dc7ffeb32c65402886504e43446f4596": "0aca3ec58a28fe416bf0b848ffdb898f",
".git/objects/6f/886af8c51b8453c827e42a652a17c5b8b560a7": "e7dddf09dc258ef51ba811eac73baec5",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f0b48832ea4870473850b345a4e944b05d7345": "43fde688a739424cf91816949f3cf10f",
".git/objects/8c/80f871e29c27c2f4b3067530314774555533cb": "bc525988b3377d983004ef17d9df4273",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/80c18c667da8c174ede1fb27786e235599ff42": "cee646e48071a2c688473f37f11eea30",
".git/objects/94/c6b92e254745f861559da4025be50cbb07075c": "5e7b8ebbb32869cd4c5c9fcc03064176",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/4ed9f9d0b3e2f4afc812671582dd8281199f41": "feab2ee03db802506dc2be80a4bcac34",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/2c8f582bd5d22896d626dabb2924b110bdbf01": "0ed2b13445f1197a1e22ab8eed26b1c7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5e993b7e9007162f4246c8204989f2cf9353b0": "f1dd263f850750e03f5adc69edd971a1",
".git/objects/da/78a7db9d009bfab2e45601dee372603ffd495f": "da25157d2f224e9b1fb963d09990c18d",
".git/objects/e1/5dfee75239fdcd31871f1243aacc4954477070": "1ec815857d80577306ee5636f1634fe2",
".git/objects/e2/e0769442ee5c9d96521e24f93bd9c4f621d817": "81feb5d0caa7440e4f08bfc38d72fe0b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/a806715cb5e1d0d11cf7894e369e928aa75f6f": "7dcae4287a9316095d30430ba17ac580",
".git/objects/fc/4c55441138759f36e58f0292acabc17cd92260": "21c5b4eb1f306708db36aed6056a85f2",
".git/refs/heads/dev": "ae843b27f828ed07f33fbfed38b66c64",
".git/refs/remotes/origin/dev": "ae843b27f828ed07f33fbfed38b66c64",
"assets/AssetManifest.json": "98800c995e8160ca533108060caee0ef",
"assets/assets/banner.jpg": "41d4fa90fa8d2241f5d1d57bb25064a8",
"assets/assets/black_logo.png": "985448590d6f15324cbd5803727d4647",
"assets/assets/greencup_logo.png": "ac80a697eebdbc6c14ac4d10b600decb",
"assets/assets/green_logo.png": "7c1fa0ac379d1daf15e23b7afb1ec319",
"assets/assets/tea_jpg_logo.jpg": "297aa6f822ed8a366001b7acb77974bd",
"assets/assets/white_text_;ogo.png": "055d9f2afaf9d2e58eadf6202e1d791f",
"assets/FontManifest.json": "598cde0406b1572122799336d054fd7c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "1c1af7a96477dd23b121bf6b33c55714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "422cf99197370c0d71959c1b1e0db98b",
"/": "422cf99197370c0d71959c1b1e0db98b",
"main.dart.js": "51205270860b38f3ea88bd68da5b3565",
"manifest.json": "05ab0cf190fe5f0ab46458d52f9feb19",
"version.json": "527e95bd4aa78a6584ec819e7746c4b7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

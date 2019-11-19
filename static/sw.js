importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1974fac37eb0369859a1.js",
    "revision": "73e557c066736fa1d69d22d7e3682232"
  },
  {
    "url": "/_nuxt/21f7cf9a64b217194c7c.js",
    "revision": "b6e5147540c06d447c4015579d2fca34"
  },
  {
    "url": "/_nuxt/286d779a691b7a5d1c0b.js",
    "revision": "e3964be46a22f3539733af49c66fc42d"
  },
  {
    "url": "/_nuxt/486be8c4182bab567d07.js",
    "revision": "9356a27889494e9f8a6e96fff5d1a180"
  },
  {
    "url": "/_nuxt/938068dc386c2b8b731c.js",
    "revision": "e272d55ce779b9575d4cdb54cb3fd45b"
  },
  {
    "url": "/_nuxt/a80aff30d5fdaa859a7c.js",
    "revision": "1d06f2c743a30639b47b0d5b6f304d3c"
  },
  {
    "url": "/_nuxt/ac839c89bbe59d0ac699.js",
    "revision": "ef12b9901c862f3ae5523bc3c119081d"
  },
  {
    "url": "/_nuxt/ae39f078653f25a658fd.js",
    "revision": "58796e3d626a927f197963f1afc4d565"
  },
  {
    "url": "/_nuxt/b3b25050aab333f8e1a4.js",
    "revision": "853506346311a5ac16ce93b8f416f50c"
  },
  {
    "url": "/_nuxt/c125ac3a82ad55da918f.js",
    "revision": "2a26e1c8748552be98e44b0c68559d1d"
  },
  {
    "url": "/_nuxt/dd052cae158137da542b.js",
    "revision": "27daddf64751453b5c6926f4589915e1"
  },
  {
    "url": "/_nuxt/df5cbe463e338bc3aff9.js",
    "revision": "34b4982743f5abfcaeefb425ceabf764"
  }
], {
  "cacheId": "websync",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

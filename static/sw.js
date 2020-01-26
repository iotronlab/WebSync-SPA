importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/110867af5adeb9949c71.js",
    "revision": "678e1e1ec5807ab71704db8d975eadea"
  },
  {
    "url": "/_nuxt/1c2a5a0eb40915f38f95.js",
    "revision": "ef5c7f3fd757887087d5bce5a3162c95"
  },
  {
    "url": "/_nuxt/36a7a0e464d037144f0f.js",
    "revision": "a2b94aa69d6061d67b30eec44e8dabec"
  },
  {
    "url": "/_nuxt/694e2f193779b121d13d.js",
    "revision": "ddb25505158cb19cda42c99524e23fc2"
  },
  {
    "url": "/_nuxt/9655b05a73319e017246.js",
    "revision": "cac9ef2ad7599b244d0caad605562d89"
  },
  {
    "url": "/_nuxt/c7677dba01067039aa47.js",
    "revision": "69dd503e9aa423ec0e190df25950aa2c"
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

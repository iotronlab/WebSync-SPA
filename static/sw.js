importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/10befdd07a385e44ae2e.js",
    "revision": "342c0a8fb3a4f8a9476060db8cfaa086"
  },
  {
    "url": "/_nuxt/52b5e3af565b6bec46f1.js",
    "revision": "23f537dc9b07c25b34d1d97dd0e4c2fc"
  },
  {
    "url": "/_nuxt/68aa63e6ed8f28773d6f.js",
    "revision": "02fd8d53f28fb95ce25baf7655b4f5a8"
  },
  {
    "url": "/_nuxt/9fb114c83ba528a94a2a.js",
    "revision": "9a42fd22ae3f3314f180bc1cc21b8d7f"
  },
  {
    "url": "/_nuxt/dc676a31255c47575685.js",
    "revision": "196ee4b76f6cd0a5643a1bc5a3ca5c3b"
  },
  {
    "url": "/_nuxt/e902786bb039feb79fa1.js",
    "revision": "1dcf7ceedff8cda6fd73ca65fde76ab8"
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

importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4b7813deb4fad9688705.js",
    "revision": "7e421ce99799771a5306ac2a60ab2616"
  },
  {
    "url": "/_nuxt/9ee07cab2e575ab89ab9.js",
    "revision": "205abd0bdbd1db52f1067f4959db126f"
  },
  {
    "url": "/_nuxt/acfa1ade4c502c5da0d4.js",
    "revision": "4519a235697269c8e3ac19472afa46ae"
  },
  {
    "url": "/_nuxt/d46b1e0c6b48c57b150a.js",
    "revision": "87bd75c38c9b7d4aeaa397c5f05e0c42"
  },
  {
    "url": "/_nuxt/e081166f9a60620a28f4.js",
    "revision": "d945ffd40bdfd818aec7aa3a1ed72d06"
  },
  {
    "url": "/_nuxt/f59ea91b6191d4359cff.js",
    "revision": "6fa13f6604b8fa44b79ff45da947341e"
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

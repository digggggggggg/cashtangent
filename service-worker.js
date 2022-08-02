/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "android-chrome-192x192.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "android-chrome-512x512.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "apple-touch-icon.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "browserconfig.xml"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "favicon-16x16.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "favicon-32x32.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "favicon.ico"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "index.html"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "mstile-150x150.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "package.json"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "safari-pinned-tab.svg"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "service-worker.js"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "site.webmanifest"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "icons/cashless-192x192.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "icons/cashless.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "icons/clash-192x192.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "icons/clash.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "icons/filenames.txt"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "icons/info-192x192.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "icons/info.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "icons/lineup-192x192.png"},
	{"revision": "ada6afdade47b05ada07868761c2a586","url": "icons/lineup.png"}
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|ico|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images-www", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, maxAgeSeconds: 864000, purgeOnQuotaError: false })] }), 'GET');
if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const n=e=>a(e,o),d={module:{uri:o},exports:s,require:n};i[o]=Promise.all(c.map((e=>d[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-d11bd3aa"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2eab3746181f840792bb.jpg",revision:null},{url:"3a1554e26de14a8b72d9.mp4",revision:null},{url:"872.bundle.js",revision:"ec5ab2eab1844c5f661c79c0c2c0b0a3"},{url:"a8e77c8dcf7cfd7a22f1.jpg",revision:null},{url:"app.webmanifest",revision:"2ae2054fd0b3ad88d11b83c34f64a294"},{url:"app~49ea73a0.bundle.js",revision:"8691ecc5f72f2b7dc0cb4304de60a8cc"},{url:"app~527efe5d.bundle.js",revision:"8abdc11fc79cc33b240bfa3ad21219dc"},{url:"app~527efe5d.css",revision:"b5cc1a56ff4d12cb1f7f82fff55ddb72"},{url:"app~ca0940c6.bundle.js",revision:"e236cdff8909aa1627e66177aaad5a35"},{url:"app~e4317507.bundle.js",revision:"37dc562026b72b4db05efb8f15fadacd"},{url:"favicon.png",revision:"642e2b79820561e9b5039d97e689899f"},{url:"icons/icon-128x128.png",revision:"ea209ca372995b270fd1b6553eaeca79"},{url:"icons/icon-144x144.png",revision:"599f2a367cfd40ae87c3aedfd7f30fb4"},{url:"icons/icon-152x152.png",revision:"478401c5b560777875567a89c8ae0bce"},{url:"icons/icon-192x192.png",revision:"9cabf3297e9785d243b25b709b99755c"},{url:"icons/icon-384x384.png",revision:"8b2fbfbce0b717dda3d831e193a56d1d"},{url:"icons/icon-512x512.png",revision:"064f7e467154a729619f1dbd643c5cc1"},{url:"icons/icon-72x72.png",revision:"f49091cfc4e13ca8da1611b8bb9e0ec0"},{url:"icons/icon-96x96.png",revision:"2bec948bf1b645d83d6ec0e65b4f990f"},{url:"icons/logoicon.png",revision:"aa3d0bd2ae85a4eacac0848f32087827"},{url:"images/hero-image_1-large.jpg",revision:"70bacc3c3fe056728721149bc642fe28"},{url:"images/hero-image_1-small.jpg",revision:"b190704f26068aaba6ff704e02b88785"},{url:"images/hero-image_2-large.jpg",revision:"0db76ac524f1f284fa90d90abe5540e6"},{url:"images/hero-image_2-small.jpg",revision:"0254f655f480d1a1b29c9849ebdcbae6"},{url:"images/hero-image_3-large.jpg",revision:"0778d8558c684131c0208a5977b90f36"},{url:"images/hero-image_3-small.jpg",revision:"66a5856f2e002295cbfc62f19507b53a"},{url:"images/hero-image_4-large.jpg",revision:"36ecae0a6af53108b75d1787208640de"},{url:"images/hero-image_4-small.jpg",revision:"09473ff37a1d35aa80e34d57e615e863"},{url:"images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/hero-image_1.webp",revision:"f49e50174b746d532730805fad98926d"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"images/loading/loader.gif",revision:"d71d8ccb7264fb1ca4a4ec9a871849d1"},{url:"images/loading/loader.mp4",revision:"7a57a6a49b5e208322b0187cce8deab4"},{url:"images/loading/loader.webm",revision:"4585faeb290ca0cc5387c11facc73e27"},{url:"images/logo/logo.png",revision:"642e2b79820561e9b5039d97e689899f"},{url:"index.html",revision:"1187b3c27c75261892a31a4911507963"}],{}),e.registerRoute(/https:\/\/restaurant-api.dicoding.dev/,new e.StaleWhileRevalidate({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:259200}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
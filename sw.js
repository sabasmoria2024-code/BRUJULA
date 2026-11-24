const CACHE='brujula-v12';const FILES=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/nudos.jpeg','./assets/plantas-venenosas.jpeg','./assets/refugio.jpeg','./assets/potabilizar-agua.jpeg','./assets/fogata.jpeg'];self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html'))))});






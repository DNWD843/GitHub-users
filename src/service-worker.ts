const _self = self as unknown as ServiceWorkerGlobalScope

const CACHE_KEY = 'gh-users' + ''
_self.addEventListener('install', (event) => {
    console.log('install')
    event.waitUntil(caches.open(CACHE_KEY))
    // TODO доделать воркер
})

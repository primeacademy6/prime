self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // يتيح تحري السيرفر واستجابة التطبيق المباشرة
});

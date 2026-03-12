importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDdTgIqJuOYJhRAhEF9vMuMA8oZViRPlts",
  authDomain: "zync-social.firebaseapp.com",
  projectId: "zync-social",
  storageBucket: "zync-social.firebasestorage.app",
  messagingSenderId: "720726547858",
  appId: "1:720726547858:web:3175ba8d0b7c987e31754b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || 'ZYNC';
  const body  = payload.notification?.body  || 'You have a new notification';
  self.registration.showNotification(title, {
    body,
    icon: '/icon-192.png',
    badge: '/icon-72.png',
    tag: payload.data?.type || 'zync',
    data: payload.data
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});

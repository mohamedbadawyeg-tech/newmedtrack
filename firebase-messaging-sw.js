// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAMJjeucsuWiIrOKJ19AK6VT9zLS7ZB6MY",
    authDomain: "medtrackmamdouh.firebaseapp.com",
    projectId: "medtrackmamdouh",
    storageBucket: "medtrackmamdouh.firebasestorage.app",
    messagingSenderId: "588115249832",
    appId: "1:588115249832:web:1e8a2f5dd57db68047909d"
});

const messaging = firebase.messaging();

// معالج الرسائل الواردة عندما يكون التطبيق في الخلفية
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icons/icon-192x192.png' // يمكنك تغيير هذا لاحقاً
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

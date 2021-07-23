
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: {FCMApiKey},
    authDomain: 'project-id.firebaseapp.com',
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'project-id',
    storageBucket: 'project-id.appspot.com',
    messagingSenderId: 'sender-id',
    appId: 'app-id',
    measurementId: 'G-measurement-id',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();
console.log(messaging);



messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  messaging.onMessage(res => {
    console.log(res);
  })

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});













/* eslint-disable no-undef */

// import firebase from 'firebase/app';
// import 'firebase/messaging';

// firebase.initializeApp({
//     messagingSenderId: "150270086978",
// })

// const messaging = getMessaging(firebase);     

// navigator.serviceWorker.register('/service-worker.js').then(registration => {
//     firebase.messaging().useServiceWorker(registration)
//   })
// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("./firebase-messaging-sw.js")
//       .then(function(registration) {
//         console.log("Registration successful, scope is:", registration.scope);
//         messaging.getToken({vapidKey: 'YOUR_VAPID_KEY', serviceWorkerRegistration : registration })
//           .then((currentToken) => {
//             if (currentToken) {
//               console.log('current token for client: ', currentToken);
    
//               // Track the token -> client mapping, by sending to backend server
//               // show on the UI that permission is secured
//             } else {
//               console.log('No registration token available. Request permission to generate one.');
    
//               // shows on the UI that permission is required 
//             }
//           }).catch((err) => {
//             console.log('An error occurred while retrieving token. ', err);
//             // catch error while creating client token
//           });  
//         })
//         .catch(function(err) {
//           console.log("Service worker registration failed, error:"  , err );
//       }); 
//     }

// import firebase from "firebase/app";
// import "firebase/messaging";



// See: https://github.com/microsoft/TypeScript/issues/14877
/** @type {ServiceWorkerGlobalScope} */
// let self;

// function initInSw() {
//   // [START messaging_init_in_sw]
//   // Give the service worker access to Firebase Messaging.
//   // Note that you can only use Firebase Messaging here. Other Firebase libraries
//   // are not available in the service worker.
// //   importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');
// //   importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js');

//   // Initialize the Firebase app in the service worker by passing in
//   // your app's Firebase config object.
//   // https://firebase.google.com/docs/web/setup#config-object
//   firebase.initializeApp({
//     authDomain: 'project-id.firebaseapp.com',
//     databaseURL: 'https://project-id.firebaseio.com',
//     projectId: 'project-id',
//     storageBucket: 'project-id.appspot.com',
//     messagingSenderId: 'sender-id',
//     appId: 'app-id',
//     measurementId: 'G-measurement-id',
//   });
// }

// function onBackgroundMessage() {
//   const messaging = firebase.messaging();
//     console.log(messaging);
//   // [START messaging_on_background_message]
//   messaging.onBackgroundMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//       body: 'Background Message body.',
//       icon: '/firebase-logo.png'
//     };
//   messaging.onMessage((payload) => {
//     console.log(payload);
//   })
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });
//   // [END messaging_on_background_message]
// }

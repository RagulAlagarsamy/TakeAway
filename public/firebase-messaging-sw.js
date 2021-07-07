/* eslint-disable no-undef */

importScript("https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js")
importScript("https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js")

firebase.initializeApp({
    messagingSenderId: "150270086978",
})

const messaging = firebase.messaging();     

    
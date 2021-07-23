
import firebase from 'firebase/app';
// import 'firebase/database';

// import * as firebase from "firebase";
import "firebase/firestore";
import 'firebase/messaging';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyAoeyiWuXGx8O0qfbhcgPnucsusIW1vI8c",
    authDomain: "takeaway-a0976.firebaseapp.com",
    databaseURL: "https://takeaway-a0976-default-rtdb.firebaseio.com",
    projectId: "takeaway-a0976",
    storageBucket: "takeaway-a0976.appspot.com",
    messagingSenderId: "150270086978",
    appId: "1:150270086978:web:a15ac42000b7c883c782db"
  };

  firebase.initializeApp(config);

  export const messaging = firebase.messaging(); 

  export const getToken = (setTokenFound) => {
    return messaging.getToken({vapidKey: 'BFQcb3yPhd57ZJVIndAtg-s_a1D7HY7SjKiuk760DHctKs_CGzWU-8DKU5_Mu7I-IQXzYlJB4xJPXuUhAv-xl3I'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

  export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
    
});

  export const auth = firebase.auth;
  export const db = firebase.database();
  export const storage = firebase.storage();

  export default firebase.firestore();
  

  
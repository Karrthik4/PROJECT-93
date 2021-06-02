import * as firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyBhwjg52qX9eAergSH6OXVbDB5Vp-cbKcQ",
    authDomain: "reminderapp-24b0e.firebaseapp.com",
    projectId: "reminderapp-24b0e",
    storageBucket: "reminderapp-24b0e.appspot.com",
    messagingSenderId: "61601851355",
    appId: "1:61601851355:web:d51fa49d6159ee3cc3e9fe",
    measurementId: "G-QWLRR0D052"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();

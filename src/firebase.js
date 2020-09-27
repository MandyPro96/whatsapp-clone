import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBaQOXh-anr3AIndKYDQ-h-QAWeh3zWQBU",
    authDomain: "whatsapp-clone-610bb.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-610bb.firebaseio.com",
    projectId: "whatsapp-clone-610bb",
    storageBucket: "whatsapp-clone-610bb.appspot.com",
    messagingSenderId: "907990575564",
    appId: "1:907990575564:web:2aa16b9e02a819db055569",
    measurementId: "G-L7EL38R0RR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
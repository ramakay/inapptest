import firebase from 'firebase/app';
import firestore from "firebase/firestore";


/* lib/config */
const firebaseConfig = {
    apiKey: "AIzaSyC-RMsVdcxkkqKluQXdaa3OPlY6EAZlXrw",
      authDomain: "inapptest-279a2.firebaseapp.com",
      databaseURL: "https://inapptest-279a2.firebaseio.com",
      projectId: "inapptest-279a2",
      storageBucket: "inapptest-279a2.appspot.com",
      messagingSenderId: "514681448098",
      appId: "1:514681448098:web:3cbd45fb8ac4f33b7d99fb",
      measurementId: "G-M317QDS9BM"
   };
  const firebaseApp =  !firebase.apps.length ?  firebase.initializeApp(firebaseConfig)
  : firebase.app();
  const inAppFirestore = firebaseApp.firestore();
export default inAppFirestore;

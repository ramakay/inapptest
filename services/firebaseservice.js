import * as firebase from "firebase";


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

export default !firebase.apps.length ?  firebase.initializeApp(firebaseConfig).firestore()
: firebase.app().firestore();

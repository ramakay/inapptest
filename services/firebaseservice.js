import firebase from 'firebase/app';
import firestore from "firebase/firestore";


/* lib/config */
console.log(process.env.FIREBASE_CONFIG);
const firebaseConfig = {
    apiKey: process.env.FBAPIKEY,
      authDomain: process.env.FBAUTHDOMAIN,
      databaseURL: process.env.FBDATABASEURL,
      projectId: 'inapptest-279a2',
      storageBucket: process.env.FBSTORAGEBUCKET,
      messagingSenderId: process.env.FBMESSAGINGSENDERID,
      appId:process.env.FBAPPID,
      measurementId: process.env.FBMEASUREMENTID
   };
  const firebaseApp =  !firebase.apps.length ?  firebase.initializeApp(firebaseConfig)
  : firebase.app();
export default firebaseApp;

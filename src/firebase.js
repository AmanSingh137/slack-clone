import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfvkhXOAPKFU7446unQcy1cT67YrI0tG4",
    authDomain: "slack-clone-85fd1.firebaseapp.com",
    projectId: "slack-clone-85fd1",
    storageBucket: "slack-clone-85fd1.appspot.com",
    messagingSenderId: "739176775238",
    appId: "1:739176775238:web:c674cb2508a634e6225447",
    measurementId: "G-KNM8C99NFT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };
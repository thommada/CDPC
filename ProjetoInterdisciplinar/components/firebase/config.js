import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCOVPPTpBHjJoafmFBoNh3WwB9bxnHPd4A",
    authDomain: "cdpc-326f1.firebaseapp.com",
    databaseURL: "https://cdpc-326f1.firebaseio.com",
    projectId: "cdpc-326f1",
    storageBucket: "cdpc-326f1.appspot.com",
    messagingSenderId: "368958949032",
    appId: "1:368958949032:web:ef1606063f02350b1de49d"
  }

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export { firebase };





  

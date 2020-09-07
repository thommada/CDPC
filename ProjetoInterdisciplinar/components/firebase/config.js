import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCYhRt791NBDFsR4PTKkltQKLiwr1-y8Uk",
    authDomain: "cdpc-246a8.firebaseapp.com",
    databaseURL: "https://cdpc-246a8.firebaseio.com",
    projectId: "cdpc-246a8",
    storageBucket: "cdpc-246a8.appspot.com",
    messagingSenderId: "658585488735",
    appId: "1:658585488735:web:76b12ac7c805c7885cbaea",
    measurementId: "G-GBGY7YHNYZ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export { firebase };

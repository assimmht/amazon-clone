import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDzTLHNYHLy_8rd9dJualvThJKd_QQhyKw",
    authDomain: "clone-f9608.firebaseapp.com",
    databaseURL: "https://clone-f9608.firebaseio.com",
    projectId: "clone-f9608",
    storageBucket: "clone-f9608.appspot.com",
    messagingSenderId: "453640748456",
    appId: "1:453640748456:web:d405387ad45e728591319d",
    measurementId: "G-5NZ0CVT00K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth};
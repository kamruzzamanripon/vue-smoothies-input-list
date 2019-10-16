import firebase from 'firebase'
import firestore from 'firebase/firebase-firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDcN4LVBqIjWbT3kI_g26f4QIksNv58mXo",
    authDomain: "smoothies-list-24e40.firebaseapp.com",
    databaseURL: "https://smoothies-list-24e40.firebaseio.com",
    projectId: "smoothies-list-24e40",
    storageBucket: "smoothies-list-24e40.appspot.com",
    messagingSenderId: "516302714729",
    appId: "1:516302714729:web:3ed5cbc31511552d98aff8",
    measurementId: "G-2F21V5HCW9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  //firebaseApp.firestore().settings({timestampsInSnapshots:true})

  export default firebaseApp.firestore()
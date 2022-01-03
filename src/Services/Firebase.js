import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmd8pfrURQDt20l9hZUYg7meUL5Y_Wlms",
    authDomain: "ecommerce-website-87849.firebaseapp.com",
    projectId: "ecommerce-website-87849",
    storageBucket: "ecommerce-website-87849.appspot.com",
    messagingSenderId: "643393401911",
    appId: "1:643393401911:web:252a3d3628060366d0bbb2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
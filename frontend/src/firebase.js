import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBeyHvDc6HXeEZqm0H7Ei0p6cPx07TGWc",
  authDomain: "whatschat-5e7e0.firebaseapp.com",
  projectId: "whatschat-5e7e0",
  storageBucket: "whatschat-5e7e0.appspot.com",
  messagingSenderId: "40498135509",
  appId: "1:40498135509:web:c31e031d1401cb910efd5c",
  measurementId: "G-20GRV5GFTB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

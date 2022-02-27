// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAJB2-N2buqUU3balan7lIJjqOhD598_cc",
  authDomain: "tumblerlogin-38719.firebaseapp.com",
  projectId: "tumblerlogin-38719",
  storageBucket: "tumblerlogin-38719.appspot.com",
  messagingSenderId: "782369169285",
  appId: "1:782369169285:web:173d8f986673d144146eec",
  measurementId: "G-ZLGQ1C5GH4"
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth()

export {app,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword};
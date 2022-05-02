// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOYpaUyGLk2f-a_KYe8Uohxtg8ISTuWK4",
  authDomain: "api-pokemon-91c91.firebaseapp.com",
  projectId: "api-pokemon-91c91",
  storageBucket: "api-pokemon-91c91.appspot.com",
  messagingSenderId: "539475311475",
  appId: "1:539475311475:web:023e8b471411a77a52e306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const baseDato = getFirestore()

export {
  app, 
  google, 
  facebook,
  baseDato
}




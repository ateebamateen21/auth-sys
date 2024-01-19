// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCmOpzdjjkRKDnxTULoGdRuNzod-4cojw",
  authDomain: "react-redux-auth-sys.firebaseapp.com",
  projectId: "react-redux-auth-sys",
  storageBucket: "react-redux-auth-sys.appspot.com",
  messagingSenderId: "667615259430",
  appId: "1:667615259430:web:b8236620579c6150e46fe7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//this app variable is  the one which will connect oru front-end to our firebase backend. It has all the configuration that we need to connect to our firebase backend.

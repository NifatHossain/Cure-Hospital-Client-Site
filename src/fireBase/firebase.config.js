// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHhR7x2DR3NTzFf0kvN1Xmpr8SmA_IH0Q",
  authDomain: "cure-hospital-f4a48.firebaseapp.com",
  projectId: "cure-hospital-f4a48",
  storageBucket: "cure-hospital-f4a48.appspot.com",
  messagingSenderId: "92412928096",
  appId: "1:92412928096:web:e2980971c0f8137e7b2305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
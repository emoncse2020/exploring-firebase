// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIzxNmMlqhdkjb_iqdXPDYwJhdz8nFLbE",
  authDomain: "simple-firebase-43f99.firebaseapp.com",
  projectId: "simple-firebase-43f99",
  storageBucket: "simple-firebase-43f99.firebasestorage.app",
  messagingSenderId: "912543588659",
  appId: "1:912543588659:web:4a1b09c34608b623b51e46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

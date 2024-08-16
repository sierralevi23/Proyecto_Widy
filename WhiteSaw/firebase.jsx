// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDout5xYkx7l2z-iCfN96Ryt6uRAS_bZsk",
  authDomain: "whitesaw-4937a.firebaseapp.com",
  projectId: "whitesaw-4937a",
  storageBucket: "whitesaw-4937a.appspot.com",
  messagingSenderId: "180072648306",
  appId: "1:180072648306:web:d1f4e601d4b56cc504bceb",
  measurementId: "G-07Y83F1C5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
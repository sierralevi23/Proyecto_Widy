import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDout5xYkx7l2z-iCfN96Ryt6uRAS_bZsk",
  authDomain: "whitesaw-4937a.firebaseapp.com",
  projectId: "whitesaw-4937a",
  storageBucket: "whitesaw-4937a.appspot.com",
  messagingSenderId: "180072648306",
  appId: "1:180072648306:web:d1f4e601d4b56cc504bceb",
  measurementId: "G-07Y83F1C5C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
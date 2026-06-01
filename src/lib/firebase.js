import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKWObptLOxhKAi_NgoTawcerJBKj0N4n8",
  authDomain: "plano-de-corrida.firebaseapp.com",
  projectId: "plano-de-corrida",
  storageBucket: "plano-de-corrida.firebasestorage.app",
  messagingSenderId: "125064046417",
  appId: "1:125064046417:web:79599b58a58a4e08649570",
  measurementId: "G-P3JW13EBDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

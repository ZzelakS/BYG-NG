// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaueFumePuilI78znyLlis6i9jNim40bM",
  authDomain: "qr-code-scanner-34e9a.firebaseapp.com",
  projectId: "qr-code-scanner-34e9a",
  storageBucket: "qr-code-scanner-34e9a.firebasestorage.app",
  messagingSenderId: "941209468006",
  appId: "1:941209468006:web:6769327b8cd4e5a181c1a7",
  measurementId: "G-L5RMJ2FYZJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, getDoc, updateDoc };

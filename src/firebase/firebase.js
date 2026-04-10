// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ add this

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB0HkOH6qD_HbrAVkN0OWOjentZxk5Jfzs",
  authDomain: "blog-f1b9b.firebaseapp.com",
  projectId: "blog-f1b9b",
  storageBucket: "blog-f1b9b.firebasestorage.app",
  messagingSenderId: "691813463986",
  appId: "1:691813463986:web:6f0a0130284d3c586cd6ab",
  // measurementId remove kari didhu (optional chhe)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Firestore database connect
export const db = getFirestore(app);
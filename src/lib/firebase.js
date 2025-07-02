// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyDRZ4z9fGDNvTexrUUjmWgDyldAs8I_wBA",
  authDomain: "attendance-c1849.firebaseapp.com",
  databaseURL:
    "https://attendance-c1849-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "attendance-c1849",
  storageBucket: "attendance-c1849.firebasestorage.app",
  messagingSenderId: "216582892818",
  appId: "1:216582892818:web:ef8bdc70d4acab3f5c57cb",
  measurementId: "G-V9Q3EK70T3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;

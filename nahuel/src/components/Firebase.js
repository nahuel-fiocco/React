// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqStozBlcikmnSzXFRAD7H7nqxIC2KfLQ",
  authDomain: "react-60d33.firebaseapp.com",
  projectId: "react-60d33",
  storageBucket: "react-60d33.appspot.com",
  messagingSenderId: "144020154413",
  appId: "1:144020154413:web:5e20c22cfc6d031b4ff0a4",
  measurementId: "G-VZDST6QWPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;

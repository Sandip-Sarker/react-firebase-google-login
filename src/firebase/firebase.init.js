// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1DdoPcOXOV6hx1Cv7wj39Gu4x-0yUYVA",
  authDomain: "practice-21b5c.firebaseapp.com",
  projectId: "practice-21b5c",
  storageBucket: "practice-21b5c.firebasestorage.app",
  messagingSenderId: "281958868062",
  appId: "1:281958868062:web:0e5bd02735bc4adff6c0cf",
  measurementId: "G-2J2HFCCGKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
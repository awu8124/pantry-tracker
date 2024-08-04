// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5W5rNEnzqEfx7h0fDTTHRHVLwCVsNDNw",
  authDomain: "pantry-tracker-16e28.firebaseapp.com",
  projectId: "pantry-tracker-16e28",
  storageBucket: "pantry-tracker-16e28.appspot.com",
  messagingSenderId: "480990870063",
  appId: "1:480990870063:web:27249468d805c1995024da",
  measurementId: "G-42ZXMN8ESN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
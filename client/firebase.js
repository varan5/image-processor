// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_136np2bMtup1RPGtWvM_qFZ9eHSuHUI",
  authDomain: "algomastery-6b47f.firebaseapp.com",
  projectId: "algomastery-6b47f",
  storageBucket: "algomastery-6b47f.appspot.com",
  messagingSenderId: "58148960125",
  appId: "1:58148960125:web:33a803ad1be28dfe5b3e14",
  measurementId: "G-3KQ2CQLYCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
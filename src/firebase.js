// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyB2z-ArcE0X5nI72-pCDkA9lRyE2B0KEmU",
    authDomain: "prografirebase-95cd4.firebaseapp.com",
    projectId: "prografirebase-95cd4",
    storageBucket: "prografirebase-95cd4.appspot.com",
    messagingSenderId: "310737027397",
    appId: "1:310737027397:web:18094300498fbf4481be2c",
    measurementId: "G-8TBM220LC3"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
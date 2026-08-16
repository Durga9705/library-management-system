// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6wzly3cV_Y7N9Qdb7crtufJlQDBVivvw",
  authDomain: "library-management-syste-1b1ac.firebaseapp.com",
  projectId: "library-management-syste-1b1ac",
  storageBucket: "library-management-syste-1b1ac.firebasestorage.app",
  messagingSenderId: "715923459689",
  appId: "1:715923459689:web:8627d0eaf3d7a213965cf8",
  measurementId: "G-JZT2LLV22Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

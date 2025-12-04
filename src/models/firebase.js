// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfV1Le_SJUGg3q2qzppOtUOaUlAaay1Ts",
  authDomain: "api-rest-node-abca0.firebaseapp.com",
  projectId: "api-rest-node-abca0",
  storageBucket: "api-rest-node-abca0.firebasestorage.app",
  messagingSenderId: "527861266354",
  appId: "1:527861266354:web:1af26b64c8dcc3917cd6ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export {db};
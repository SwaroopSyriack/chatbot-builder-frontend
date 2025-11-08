// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc9moP84VjBU_11Y5nCO4Vpp3VUW0XdfY",
  authDomain: "bot-builder-89acb.firebaseapp.com",
  projectId: "bot-builder-89acb",
  storageBucket: "bot-builder-89acb.firebasestorage.app",
  messagingSenderId: "750659889284",
  appId: "1:750659889284:web:2157ad670a9f9f6e49fad1",
  measurementId: "G-M6636G7BZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
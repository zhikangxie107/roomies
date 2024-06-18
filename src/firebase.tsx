// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_API_KEY } from '@env';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "roomies-f4810.firebaseapp.com",
  projectId: "roomies-f4810",
  storageBucket: "roomies-f4810.appspot.com",
  messagingSenderId: "1000797573639",
  appId: "1:1000797573639:web:d33f8b71cf7f5326e0d0a2",
  measurementId: "G-X52PNWS6QW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const database = getFirestore(app)
export default app;

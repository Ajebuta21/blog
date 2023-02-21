// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDdWx6k60pC6bZH_Df8OaafRhPsPB4gt5s",
  authDomain: "reactblog-bb6f9.firebaseapp.com",
  projectId: "reactblog-bb6f9",
  storageBucket: "reactblog-bb6f9.appspot.com",
  messagingSenderId: "816574810716",
  appId: "1:816574810716:web:32e902e9f532e910ccb499",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
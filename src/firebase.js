// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmD5V07fh3FqOY-0ONUPRbXPw6LWHfQ_g",
  authDomain: "maigomiya.firebaseapp.com",
  databaseURL: "https://maigomiya-default-rtdb.firebaseio.com",
  projectId: "maigomiya",
  storageBucket: "maigomiya.appspot.com",
  messagingSenderId: "383290793744",
  appId: "1:383290793744:web:2ba09bb4678a91e883cf95",
  measurementId: "G-XT8ER1SLS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDbBIDyPHvZdPG2owgqRIfvJfS4E7gMdyU",
  authDomain: "auto-hiring-app-587b0.firebaseapp.com",
  projectId: "auto-hiring-app-587b0",
  storageBucket: "auto-hiring-app-587b0.appspot.com",
  messagingSenderId: "474831192309",
  appId: "1:474831192309:web:51fb71abf3a389743645bc",
  measurementId: "G-SCES1X8R1Z",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

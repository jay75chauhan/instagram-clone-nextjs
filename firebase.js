// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIAlRrniMh7dqIDD-FnpOhDpfmY7he-D0",
  authDomain: "instagram-clone-nextjs-cca7e.firebaseapp.com",
  projectId: "instagram-clone-nextjs-cca7e",
  storageBucket: "instagram-clone-nextjs-cca7e.appspot.com",
  messagingSenderId: "808571196353",
  appId: "1:808571196353:web:080d2121cfe4d4944e1540",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

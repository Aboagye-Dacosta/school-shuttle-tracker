// Import the functions you need from the SDKs you need
import  { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyBCqlw8TJAnCPKOVhfD5SJitzR0K8WXstQ",
  authDomain: "busing-9023e.firebaseapp.com",
  databaseURL: "https://busing-9023e-default-rtdb.firebaseio.com/",
  projectId: "busing-9023e",
  storageBucket: "busing-9023e.appspot.com",
  messagingSenderId: "121540843935",
  appId: "1:121540843935:web:092753ccdc7cd43242c5aa",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
const store = getFirestore  (app);

export { app, db, storage , auth ,store };


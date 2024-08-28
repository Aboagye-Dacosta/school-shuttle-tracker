// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
 apiKey: "AIzaSyAoZlv2e8MctiWhQbcQahh15qlVDgrQPKY",
    authDomain: "shuttle-d9a3a.firebaseapp.com",
    projectId: "shuttle-d9a3a",
    storageBucket: "shuttle-d9a3a.appspot.com",
    messagingSenderId: "516275836035",
    appId: "1:516275836035:web:9365a242b77b5f03eaf7b6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
const store = getFirestore  (app);

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LfSFjEqAAAAAPRYjJju25R_uCm1i2QmpbaVQ4YE'),
  isTokenAutoRefreshEnabled: true
});


export { app, auth, db, storage, store };


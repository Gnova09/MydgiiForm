// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const {apiKey,databaseURL, authDomain,projectId, storageBucket, messagingSenderId,appId,measurementId} = process.env
const firebaseConfig = {
    apiKey,
    databaseURL,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    app,
    auth
}

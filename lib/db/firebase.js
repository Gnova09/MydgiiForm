
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${process.env.NEXT_PUBLIC_apiKey}`,
    databaseURL: `${process.env.databaseURL}`,
    authDomain: `${process.env.authDomain}`,
    projectId: `${process.env.projectId}`,
    storageBucket: `${process.env.storageBucket}`,
    messagingSenderId: `${process.env.messagingSenderId}`,
    appId: `${process.env.appId}`,
    measurementId: `${process.env.measurementId}`
};
console.log(
    {
        apiKey: `${process.env.NEXT_PUBLIC_apiKey}`,
        databaseURL: `${process.env.databaseURL}`,
        authDomain: `${process.env.authDomain}`,
        projectId: `${process.env.projectId}`,
        storageBucket: `${process.env.storageBucket}`,
        messagingSenderId: `${process.env.messagingSenderId}`,
        appId: `${process.env.appId}`,
        measurementId: `${process.env.measurementId}`
    }
)


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    app,
    auth
}

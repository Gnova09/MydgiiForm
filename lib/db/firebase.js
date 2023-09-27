
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${process.env.NEXT_PUBLIC_apiKey}`,
    databaseURL: `${process.env.NEXT_PUBLIC_databaseURL}`,
    authDomain: `${process.env.NEXT_PUBLIC_authDomain}`,
    projectId: `${process.env.NEXT_PUBLIC_projectId}`,
    storageBucket: `${process.env.NEXT_PUBLIC_storageBucket}`,
    messagingSenderId: `${process.env.NEXT_PUBLIC_messagingSenderId}`,
    appId: `${process.env.NEXT_PUBLIC_appId}`,
    measurementId: `${process.env.NEXT_PUBLIC_measurementId}`
};
console.log(
    {
        apiKey: `${process.env.apiKey}`,
        databaseURL: `${process.env.databaseURL}`,
        authDomain: `${process.env.authDomain}`,
        projectId: `${process.env.projectId}`,
        storageBucket: `${process.env.NEXT_PUBLIC_storageBucket}`,
        messagingSenderId: `${process.env.NEXT_PUBLIC_messagingSenderId}`,
        appId: `${process.env.NEXT_PUBLIC_appId}`,
        measurementId: `${process.env.NEXT_PUBLIC_measurementId}`
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

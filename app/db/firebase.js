// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1lKtFXFXy83bdmINQ1WwKXH9KT-sdBbM",
    databaseURL: "https://mydgiiapp-default-rtdb.firebaseio.com/",
    authDomain: "mydgiiapp.firebaseapp.com",
    projectId: "mydgiiapp",
    storageBucket: "mydgiiapp.appspot.com",
    messagingSenderId: "573530173108",
    appId: "1:573530173108:web:d0a6ed7f93ffb752b8f1e1",
    measurementId: "G-54228830VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db,
    app
}

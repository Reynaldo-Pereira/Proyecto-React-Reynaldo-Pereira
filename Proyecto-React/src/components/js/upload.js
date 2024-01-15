// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqwe9T4LmE8v6yPGdKRIQgZG6ZpVnmjpQ",
    authDomain: "react-reynaldo-pereira.firebaseapp.com",
    projectId: "react-reynaldo-pereira",
    storageBucket: "react-reynaldo-pereira.appspot.com",
    messagingSenderId: "813940278531",
    appId: "1:813940278531:web:dc9774c63932e0fc41d536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )
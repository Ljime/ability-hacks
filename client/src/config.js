import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCsQPxKB0V-n-YqgnDUvhOwg8B7MYanjXU",
    authDomain: "ability-hacks.firebaseapp.com",
    projectId: "ability-hacks",
    storageBucket: "ability-hacks.appspot.com",
    messagingSenderId: "35056063931",
    appId: "1:35056063931:web:5b3215c47123496821a09e"
});

const db = getFirestore();

export default db;
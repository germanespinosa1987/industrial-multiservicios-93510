// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDin1l2mfyPFkDzBFno2CtK3VBVM31c2Wk",
    authDomain: "industrial-multiservicio93510.firebaseapp.com",
    projectId: "industrial-multiservicio93510",
    storageBucket: "industrial-multiservicio93510.firebasestorage.app",
    messagingSenderId: "341087921678",
    appId: "1:341087921678:web:9196d6fd1c468bac73fe5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
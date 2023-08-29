// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5s2PDThetmP-WLTmTu9lThNtV1TL81dQ",
    authDomain: "ecommerce-2f50d.firebaseapp.com",
    projectId: "ecommerce-2f50d",
    storageBucket: "ecommerce-2f50d.appspot.com",
    messagingSenderId: "591703477190",
    appId: "1:591703477190:web:61027f72712286786a40c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
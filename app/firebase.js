// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL6zNFcowUbBF92Q3lOlkphSVb8zFoWdQ",
    authDomain: "nextjs-auth-project-34c2d.firebaseapp.com",
    projectId: "nextjs-auth-project-34c2d",
    storageBucket: "nextjs-auth-project-34c2d.appspot.com",
    messagingSenderId: "1087153835141",
    appId: "1:1087153835141:web:8f4bd97bc3de69c9e46dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
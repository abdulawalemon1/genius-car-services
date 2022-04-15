// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAvIkS8bcKRg8WSQA2b__fIMqUS0PASsc",
    authDomain: "genius-car-services-b989e.firebaseapp.com",
    projectId: "genius-car-services-b989e",
    storageBucket: "genius-car-services-b989e.appspot.com",
    messagingSenderId: "257457013615",
    appId: "1:257457013615:web:a816e3b345dd640f21de9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
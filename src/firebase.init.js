// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXLvys2GxT3xEJkOyoyGaaKeePDzkvLVY",
  authDomain: "private-car-service.firebaseapp.com",
  projectId: "private-car-service",
  storageBucket: "private-car-service.appspot.com",
  messagingSenderId: "1097880341210",
  appId: "1:1097880341210:web:1e91dc7145c8cf52ca33e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
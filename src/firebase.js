// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0ZKjw9bADIrRtd2x1ipdgusEqdAM0-fY",
  authDomain: "react-disney-plus-app-4b8d9.firebaseapp.com",
  projectId: "react-disney-plus-app-4b8d9",
  storageBucket: "react-disney-plus-app-4b8d9.appspot.com",
  messagingSenderId: "563944546288",
  appId: "1:563944546288:web:6850f71bdda1bd56c28735",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

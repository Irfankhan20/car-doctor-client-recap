// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRC80bylxDHiQkj8BTgSepK1ftxLUxFmY",
  authDomain: "car-doctor-recap-455ed.firebaseapp.com",
  projectId: "car-doctor-recap-455ed",
  storageBucket: "car-doctor-recap-455ed.appspot.com",
  messagingSenderId: "862795099110",
  appId: "1:862795099110:web:5fe283ffa373056441c427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
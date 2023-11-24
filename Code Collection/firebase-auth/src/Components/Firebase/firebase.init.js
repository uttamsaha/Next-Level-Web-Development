// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJEfAfKttq0ncn1thlNoO3On1bE1m7CkA",
  authDomain: "fir-auth-2aae2.firebaseapp.com",
  projectId: "fir-auth-2aae2",
  storageBucket: "fir-auth-2aae2.appspot.com",
  messagingSenderId: "653406750891",
  appId: "1:653406750891:web:1c2d473f159a5865150fee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

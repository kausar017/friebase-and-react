// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvaErDL3EQKs3j87T5bgb10Cpkpp5Eb0A",
  authDomain: "fir-react-017.firebaseapp.com",
  projectId: "fir-react-017",
  storageBucket: "fir-react-017.firebasestorage.app",
  messagingSenderId: "614937620882",
  appId: "1:614937620882:web:238fb917e07aedd1ee914b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;
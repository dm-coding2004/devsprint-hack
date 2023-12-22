// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfUQOAuph4o90cFtzU4F3a49bEK9Je_Yk",
  authDomain: "product-hack-otp.firebaseapp.com",
  projectId: "product-hack-otp",
  storageBucket: "product-hack-otp.appspot.com",
  messagingSenderId: "46161039057",
  appId: "1:46161039057:web:9047723685f228080bbff0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };

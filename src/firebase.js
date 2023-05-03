// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARB0JOAc9owU_O61TZZiAFnxWnFaHgT20",
  authDomain: "fir-curd47.firebaseapp.com",
  projectId: "fir-curd47",
  storageBucket: "fir-curd47.appspot.com",
  messagingSenderId: "300604690035",
  appId: "1:300604690035:web:32ad5c91426f9ab9a86406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
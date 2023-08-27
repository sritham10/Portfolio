// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG7iIx-EydmYCJwQxY9wJlZGojH7xjj2E",
  authDomain: "sritham-portfolio.firebaseapp.com",
  projectId: "sritham-portfolio",
  storageBucket: "sritham-portfolio.appspot.com",
  messagingSenderId: "747999339855",
  appId: "1:747999339855:web:e9de8ced492ad562b5d13a"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const db=getFirestore();
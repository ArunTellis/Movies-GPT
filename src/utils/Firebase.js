// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNTIeCnnnBMWEu81vMeHQdr-JXorfxUSU",
  authDomain: "movie-gpt-8fef5.firebaseapp.com",
  projectId: "movie-gpt-8fef5",
  storageBucket: "movie-gpt-8fef5.appspot.com",
  messagingSenderId: "392660007989",
  appId: "1:392660007989:web:e7b499e77aedafb8b0457c",
  measurementId: "G-4GXH4BN7QH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

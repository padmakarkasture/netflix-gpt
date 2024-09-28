// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv2M39sRq4J-__pmpi2WWf4SU9ur-ExCU",
  authDomain: "fir-eadad.firebaseapp.com",
  projectId: "fir-eadad",
  storageBucket: "fir-eadad.appspot.com",
  messagingSenderId: "105987783289",
  appId: "1:105987783289:web:53495cf6c805302b1972a8",
  measurementId: "G-9N95CL16B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD7PZr0iAfCnKSGclPTGg_zKn_D_NIFbD8",
  authDomain: "fir-auth-1df3c.firebaseapp.com",
  projectId: "fir-auth-1df3c",
  storageBucket: "fir-auth-1df3c.appspot.com",
  messagingSenderId: "227901147816",
  appId: "1:227901147816:web:8516616df702c39912909d",
  measurementId: "G-DF5M1ZS3QY"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app , auth};
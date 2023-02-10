// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase, getStorage, getAuth } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4n5CwTNUbmqcLBT6AO_t6uZ0Xqp0Hlpk",
  authDomain: "mingming-f3a40.firebaseapp.com",
  databaseURL: "https://mingming-f3a40.firebaseio.com",
  projectId: "mingming-f3a40",
  storageBucket: "mingming-f3a40.appspot.com",
  messagingSenderId: "507736559855",
  appId: "1:507736559855:web:49d77e1df69d9f0eec0b1a",
  measurementId: "G-MX16VGLH2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const authentication = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjBeAiokldfxrxsj1nD7rYhMehpMEQQpI",
  authDomain: "pcla-microsite.firebaseapp.com",
  databaseURL:
    "https://pcla-microsite-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pcla-microsite",
  storageBucket: "pcla-microsite.appspot.com",
  messagingSenderId: "328487990954",
  appId: "1:328487990954:web:5f0d9e8d6a15dca2b642d3",
  measurementId: "G-5DMYGWQSD0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const authentication = getAuth(app);
// const analytics = getAnalytics(app);

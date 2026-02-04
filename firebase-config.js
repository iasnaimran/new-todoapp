// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8fqAqA8kEkLgYQ3dPW0Tt5vYBxOp6CTM",
  authDomain: "todoapp-2-32787.firebaseapp.com",
  databaseURL: "https://todoapp-2-32787-default-rtdb.firebaseio.com",
  projectId: "todoapp-2-32787",
  storageBucket: "todoapp-2-32787.firebasestorage.app",
  messagingSenderId: "510216832289",
  appId: "1:510216832289:web:0ae2eb29ae44ef45c16a60",
  measurementId: "G-VR2LYRR6NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Global database reference
var db = firebase.database();
  
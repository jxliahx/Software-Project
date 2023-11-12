// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCBm_gHryCWbHBOl6mS60DwiLnpeO5ccY",
  authDomain: "student-group-project-manager.firebaseapp.com",
  databaseURL: "https://student-group-project-manager-default-rtdb.firebaseio.com",
  projectId: "student-group-project-manager",
  storageBucket: "student-group-project-manager.appspot.com",
  messagingSenderId: "484359172151",
  appId: "1:484359172151:web:db0b1281b2ad019e210fb2",
  measurementId: "G-Q3R6ZFLW40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const database = getDatabase(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa8sCmxvwCQ8MB4Um69m7wARQczo7hbws",
  authDomain: "blogging-app-1d435.firebaseapp.com",
  projectId: "blogging-app-1d435",
  storageBucket: "blogging-app-1d435.appspot.com",
  messagingSenderId: "402657897883",
  appId: "1:402657897883:web:2aa477e3655f931ded853e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

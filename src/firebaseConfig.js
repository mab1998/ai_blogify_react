// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyAwVZftM2lw1SnLEdDWgGOWyh2HHt6MVuE",
  authDomain: "univ-e3551.firebaseapp.com",
  databaseURL: "https://univ-e3551-default-rtdb.firebaseio.com",
  projectId: "univ-e3551",
  storageBucket: "univ-e3551.appspot.com",
  messagingSenderId: "197049884702",
  appId: "1:197049884702:web:6f15d2ebc354b77141ce0f",
  measurementId: "G-77JPFSTWHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };

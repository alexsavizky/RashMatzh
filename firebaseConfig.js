import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGpppkK1qCObZeDw4mF8lklzyvuU1ccLU",
  authDomain: "rashmatz-f83d2.firebaseapp.com",
  projectId: "rashmatz-f83d2",
  storageBucket: "rashmatz-f83d2.appspot.com",
  messagingSenderId: "8690712236",
  appId: "1:8690712236:web:094870da1a750b7f04a909",
  measurementId: "G-G17861W4W1",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
export { auth, firestore };

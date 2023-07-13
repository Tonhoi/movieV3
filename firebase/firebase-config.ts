import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArj3_OR3Orlwth0sAoZLsOrbH1Jp9cFo4",
  authDomain: "smovie-96cf0.firebaseapp.com",
  projectId: "smovie-96cf0",
  storageBucket: "smovie-96cf0.appspot.com",
  messagingSenderId: "470762058205",
  appId: "1:470762058205:web:89d4248b7b57e5e5ae0634",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
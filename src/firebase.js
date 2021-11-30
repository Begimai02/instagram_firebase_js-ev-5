import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBq9VECrXBZIdYXLBxrNS6_ZkQS7HIXozI",
  authDomain: "project3-37398.firebaseapp.com",
  projectId: "project3-37398",
  storageBucket: "project3-37398.appspot.com",
  messagingSenderId: "421899760168",
  appId: "1:421899760168:web:62d52da3f23bea857c7b1d",
});

export const firestore = getFirestore(firebaseApp);

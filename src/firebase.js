


import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyB4i9inTeA1tZR27MvjJcGV_GA8cMqSXdE",
    authDomain: "fire-form-843fb.firebaseapp.com",
    projectId: "fire-form-843fb",
    storageBucket: "fire-form-843fb.appspot.com",
    messagingSenderId: "762980705032",
    appId: "1:762980705032:web:418d081aabb41df119c2bd"
  };

// Initialize Firebase and Firestore


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }
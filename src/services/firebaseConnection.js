
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC71XbdkgWHkVOSB58LOjDwnNXCkT4AtE4",
    authDomain: "tickets-4932a.firebaseapp.com",
    projectId: "tickets-4932a",
    storageBucket: "tickets-4932a.appspot.com",
    messagingSenderId: "968077911401",
    appId: "1:968077911401:web:4ded1a8a7dccfefe2849f8",
    measurementId: "G-PYB6BLM53P"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
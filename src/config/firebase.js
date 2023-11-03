import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB3HPIWtVI0f21JhPVuusLcV8xzGYPeo1M",
    authDomain: "bombe-med.firebaseapp.com",
    projectId: "bombe-med",
    storageBucket: "bombe-med.appspot.com",
    messagingSenderId: "237363825118",
    appId: "1:237363825118:web:f5412048014f47d27db54f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
export default app;
export const database = getFirestore(app);
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDdzBArW24hTpSJ4G3aEwQeTJdthK70HUA",
    authDomain: "chatapp-fa11e.firebaseapp.com",
    databaseURL: "https://chatapp-fa11e-default-rtdb.firebaseio.com",
    projectId: "chatapp-fa11e",
    storageBucket: "chatapp-fa11e.firebasestorage.app",
    messagingSenderId: "40068163621",
    appId: "1:40068163621:web:5f429e0f9bbd214e5637cc",
    measurementId: "G-LHTX887W3B"
};




const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const auth = getAuth(app);



export { db, provider, auth, storage };
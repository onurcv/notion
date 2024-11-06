import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBy4VgEK5cWsWkLTwIpJBpc9We9-EuFW3g",
  authDomain: "notion-b2a5e.firebaseapp.com",
  projectId: "notion-b2a5e",
  storageBucket: "notion-b2a5e.firebasestorage.app",
  messagingSenderId: "410107767748",
  appId: "1:410107767748:web:97a590cae782a486ba1291"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };

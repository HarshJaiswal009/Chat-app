import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactdemo-472ae.firebaseapp.com",  // Your original auth domain
  projectId: "reactdemo-472ae",  // Your original project ID
  storageBucket: "reactdemo-472ae.appspot.com",  // Your original storage bucket
  messagingSenderId: "744452490341",  // Your original messaging sender ID
  appId: "1:744452490341:web:db417858896939911c328c",  // Your original app ID
};

// Initialize Firebase app with your config
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


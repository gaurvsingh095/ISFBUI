import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCC54rOk1QAs0fstMeriKgLYm93ik5RZa4",
	authDomain: "leetclone-d798e.firebaseapp.com",	
	projectId: "leetclone-d798e",
	storageBucket: "leetclone-d798e.firebasestorage.app",
	messagingSenderId: "743583724717",
	appId: "1:743583724717:web:1b9082e83648c0655ac224"
  };
  

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };

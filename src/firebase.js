import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkZrtMOllrSkJ4iraP4ag_pm3a2To6iQ4",
  authDomain: "mynotes-398c4.firebaseapp.com",
  projectId: "mynotes-398c4",
  storageBucket: "mynotes-398c4.appspot.com",
  messagingSenderId: "964476864063",
  appId: "1:964476864063:web:3d7ca7ab29029a5b7a1a8a",
  measurementId: "G-YMCPYWKKRK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
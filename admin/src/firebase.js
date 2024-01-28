import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_KEY,
  authDomain: "netflix-clone-9d32d.firebaseapp.com",
  projectId: "netflix-clone-9d32d",
  storageBucket: "netflix-clone-9d32d.appspot.com",
  messagingSenderId: "580211417233",
  appId: "1:580211417233:web:c9079f75c8347c3377df30",
  measurementId: "G-682LKNT029",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;

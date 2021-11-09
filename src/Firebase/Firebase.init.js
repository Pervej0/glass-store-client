import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseAuthentication = () => {
  return initializeApp(firebaseConfig);
};

export default firebaseAuthentication;

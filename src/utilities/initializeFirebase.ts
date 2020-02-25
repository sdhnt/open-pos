import firebase from "firebase";
import { hasInternet } from "./hasInternet";

const config = {
  apiKey: "AIzaSyBlxUkCX8OPsb9QL2p_jN8vaHdb5LhsS7A",
  authDomain: "open-fintech.firebaseapp.com",
  databaseURL: "https://open-fintech.firebaseio.com",
  projectId: "open-fintech",
  storageBucket: "open-fintech.appspot.com",
  messagingSenderId: "1001643033524",
  measurementId: "G-CECMRG504L",
};

export const initializeFirebase = async (): Promise<boolean> => {
  // check if there is internet and if there is an app running already
  const condition = (await hasInternet()) && firebase.apps.length === 0;
  if (condition) {
    console.log("initialize firebase app");
    firebase.initializeApp(config);
  }

  return (await hasInternet()) && firebase.apps.length !== 0;
};

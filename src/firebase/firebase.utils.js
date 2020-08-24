import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBel-2zvO4sidtblr07C_Prs11pDmgtYq8",
  authDomain: "crwn-db-e3f6e.firebaseapp.com",
  databaseURL: "https://crwn-db-e3f6e.firebaseio.com",
  projectId: "crwn-db-e3f6e",
  storageBucket: "crwn-db-e3f6e.appspot.com",
  messagingSenderId: "775629732770",
  appId: "1:775629732770:web:a4755299a47126e52510fb",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

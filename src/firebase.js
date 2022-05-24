import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGeGDRWZFDsQcNf0Iii0dbSIgBdgvDPTw",
  authDomain: "snapchat-clone-f0a45.firebaseapp.com",
  databaseURL: "https://snapchat-clone-f0a45-default-rtdb.firebaseio.com",
  projectId: "snapchat-clone-f0a45",
  storageBucket: "snapchat-clone-f0a45.appspot.com",
  messagingSenderId: "116951571833",
  appId: "1:116951571833:web:2488fdf4d6e11252bc23a8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };

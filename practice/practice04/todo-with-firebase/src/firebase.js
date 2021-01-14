import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDUOWCCmnxl4nb1n15-U8hCSXGxFgVjvoI",
  authDomain: "todoapp-206bd.firebaseapp.com",
  databaseURL: "https://todoapp-206bd-default-rtdb.firebaseio.com",
  projectId: "todoapp-206bd",
  storageBucket: "todoapp-206bd.appspot.com",
  messagingSenderId: "1009720709765",
  appId: "1:1009720709765:web:8e8b87c2eec3679e75cfec",
  measurementId: "G-LBKDDL54RL",
};
firebase.initializeApp(firebaseConfig);
const firestore = new firebase.firestore();

export { firestore };

import app from "firebase/app";
import "firebase/auth";
import "firebase/storage";
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

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.firestore = app.firestore();
    this.auth = app.auth();
    // this.auth.signInWithEmailAndPassword()
  }
  doSingInWithEmailAndPassWord(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
}

export default new Firebase();

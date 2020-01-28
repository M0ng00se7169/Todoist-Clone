import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC_uj2VGEHI5J3OPMMwIxZgA7nwSUFn_EM",
  authDomain: "todoist-clone-2aa4b.firebaseapp.com",
  databaseURL: "https://todoist-clone-2aa4b.firebaseio.com",
  projectId: "todoist-clone-2aa4b",
  storageBucket: "todoist-clone-2aa4b.appspot.com",
  messagingSenderId: "738115855714",
  appId: "1:738115855714:web:4c046f2bb2a46ac4d8383b"
});

export { firebaseConfig as firebase };

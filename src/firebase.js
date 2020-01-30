import firebase from "firebase/app";
import "firebase/firestore";
import * as keys from './config/keys'

const firebaseConfig = firebase.initializeApp({
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  databaseURL: keys.databaseURL,
  projectId: "todoist-clone-2aa4b",
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId,
  appId: keys.appId  
});

export { firebaseConfig as firebase };

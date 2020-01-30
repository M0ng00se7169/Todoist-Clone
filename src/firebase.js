import firebase from "firebase/app";
import "firebase/firestore";
import * as keys from './config/keys'

const firebaseConfig = firebase.initializeApp({keys});

export { firebaseConfig as firebase };

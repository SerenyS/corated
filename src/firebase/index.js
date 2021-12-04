// import firebase from 'firebase/app'
import * as firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyACNyzw6mAw_5CrFFGIBRTwk54xwoCEYEI",
    authDomain: "jsfinal-4a327.firebaseapp.com",
    projectId: "jsfinal-4a327",
    storageBucket: "jsfinal-4a327.appspot.com",
    messagingSenderId: "147466836060",
    appId: "1:147466836060:web:b6c15c1c93c2535ef7ae99"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export {firebase, db, auth, storage};

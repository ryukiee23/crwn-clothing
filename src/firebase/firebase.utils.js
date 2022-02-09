import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAMOIpv1yS1cf9b4FcEXsg6Wfj9YpruFk0",
    authDomain: "crwn-db-fa00f.firebaseapp.com",
    projectId: "crwn-db-fa00f",
    storageBucket: "crwn-db-fa00f.appspot.com",
    messagingSenderId: "1060570369122",
    appId: "1:1060570369122:web:248e9732acf865d2c7153b",
    measurementId: "G-TKJZDD27TS"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
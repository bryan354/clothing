import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBA1vwYG22HI_V2UOUgEntKeOSFjqatsDI",
    authDomain: "crown-clothing-12d47.firebaseapp.com",
    projectId: "crown-clothing-12d47",
    storageBucket: "crown-clothing-12d47.appspot.com",
    messagingSenderId: "952782496237",
    appId: "1:952782496237:web:3edeab0633896aed0587e4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
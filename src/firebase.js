import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyBioG3x3PsnHayCJJv81YhWWgK6nDIwaVg',
    authDomain: 'goldenwinner-b1672.firebaseapp.com',
    databaseURL:
        'https://goldenwinner-b1672-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'goldenwinner-b1672',
    storageBucket: 'goldenwinner-b1672.appspot.com',
    messagingSenderId: '890701370346',
    appId: '1:890701370346:web:84b0a1b77897d2c351d893',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

// export const playersRef = firebase.database().ref('Players');

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBioG3x3PsnHayCJJv81YhWWgK6nDIwaVg',
    authDomain: 'goldenwinner-b1672.firebaseapp.com',
    projectId: 'goldenwinner-b1672',
    storageBucket: 'goldenwinner-b1672.appspot.com',
    messagingSenderId: '890701370346',
    appId: '1:890701370346:web:84b0a1b77897d2c351d893',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

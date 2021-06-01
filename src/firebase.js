import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCk475urlQJEcDQYDtIj2PeE_R7irZX2os",
    authDomain: "clone-react-67fb1.firebaseapp.com",
    projectId: "clone-react-67fb1",
    storageBucket: "clone-react-67fb1.appspot.com",
    messagingSenderId: "416584082243",
    appId: "1:416584082243:web:b6e7cc62000269109145f6"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
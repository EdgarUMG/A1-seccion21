import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA8spaRRus5CHDFeGo_Wi0tr3_uLU3Hhiw",
    authDomain: "react-app-cursos-9c987.firebaseapp.com",
    projectId: "react-app-cursos-9c987",
    storageBucket: "react-app-cursos-9c987.appspot.com",
    messagingSenderId: "878770971979",
    appId: "1:878770971979:web:20fbd109bc5278161f74ce"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}
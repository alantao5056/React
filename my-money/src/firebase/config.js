import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBgrVI0OE6K16b6vhBUnsk0wTgADohHMMg",
  authDomain: "mymoney-c51f5.firebaseapp.com",
  projectId: "mymoney-c51f5",
  storageBucket: "mymoney-c51f5.appspot.com",
  messagingSenderId: "643455607837",
  appId: "1:643455607837:web:e7b4bc29cf9b8b0253d2f4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDM0Ce2LlHuK5YDDvdbCLZUEqm-F2KKhjo",
  authDomain: "cooking-ninja-site-3fe0d.firebaseapp.com",
  projectId: "cooking-ninja-site-3fe0d",
  storageBucket: "cooking-ninja-site-3fe0d.appspot.com",
  messagingSenderId: "881026718840",
  appId: "1:881026718840:web:219636cad3fa76a344e18d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }

import firebase from "firebase/app";

import "firebase/firestore";


let firebaseConfig = {
  apiKey: "AIzaSyAieMwFNt34quaHvrD2F6aNhLN2Vl4gd2M",
  authDomain: "abelhas-b4bd8.firebaseapp.com",
  projectId: "abelhas-b4bd8",
  storageBucket: "abelhas-b4bd8.appspot.com",
  messagingSenderId: "304824868355",
  appId: "1:304824868355:web:c321d826291ec171f33836",
  measurementId: "G-HLNSNDLVNF"
    
};

// Initialize Firebase

if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}

export default firebase



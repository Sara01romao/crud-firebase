
import firebase from "firebase/app";

import "firebase/firestore";


let firebaseConfig = {
  
    
};

// Initialize Firebase

if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}

export default firebase



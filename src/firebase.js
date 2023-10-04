// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw_JMG1zEwPJLGpeJnvj8yvaBbtF8gVRo",
  authDomain: "react-hooks-blog-2f6c5.firebaseapp.com",
  projectId: "react-hooks-blog-2f6c5",
  storageBucket: "react-hooks-blog-2f6c5.appspot.com",
  messagingSenderId: "844153930460",
  appId: "1:844153930460:web:9ed4745d799bb2982f6a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
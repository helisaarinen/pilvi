import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA_9_5HbqHKr8W5ArEpbdyxDBkRG8LLMDg",
  authDomain: "pilvi-react-c1837.firebaseapp.com",
  projectId: "pilvi-react-c1837",
  storageBucket: "pilvi-react-c1837.appspot.com",
  messagingSenderId: "374136265441",
  appId: "1:374136265441:web:b4e1d38b26d7ce0fc7b5a0"
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  export {firestore, auth};
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBXeDBuEiOibt9C6tEEDdJRCJlRdLRnkIA",
  authDomain: "aswitha-bc17c.firebaseapp.com",
  projectId: "aswitha-bc17c",
  storageBucket: "aswitha-bc17c.appspot.com",
  messagingSenderId: "791616546034",
  appId: "1:791616546034:web:5cc7631ff632704d945c6b",
  measurementId: "G-C1VC3CJ09N"
};


const firebaseApp = initializeApp(firebaseConfig);
//const db=firebaseApp.firestore();
const db=getFirestore(firebaseApp)
export {db}
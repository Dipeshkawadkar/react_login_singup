import firebase from "firebase/app";
// import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_Auth_Domain,
  databaseURL: process.env.REACT_APP_FIREBASE_database_URL,
  projectId: process.env.REACT_APP_FIREBASE_Project_Id,
  storageBucket: process.env.REACT_APP_FIREBASE_Storage_Bucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_Messaging_Sender_Id,
  appId: process.env.REACT_APP_FIREBASE_App_Id,
});

export const auth = app.auth();
export const firestore = app.firestore();
export default app;

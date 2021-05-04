import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APPLICATION_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

//export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const getFirestoreTimestamp = async () => {
  let timestamp = await firebase.firestore.Timestamp.fromDate(new Date());
  return timestamp;
};

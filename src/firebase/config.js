import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDPcyNz5RVQcthoShxqZMOBl9W7IgMtuB0",
  authDomain: "firegram-b203c.firebaseapp.com",
  databaseURL: "https://firegram-b203c-default-rtdb.firebaseio.com",
  projectId: "firegram-b203c",
  storageBucket: "firegram-b203c.appspot.com",
  messagingSenderId: "191960281048",
  appId: "1:191960281048:web:09f150bca5c79bb0480cad",
  measurementId: "G-M0EJ692E61"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import * as firebase from 'firebase/app';
// import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBjJPGc-YtFgwdqhN14jw0e2ntxeqejwGE',
  authDomain: 'clone-84db7.firebaseapp.com',
  projectId: 'clone-84db7',
  storageBucket: 'clone-84db7.appspot.com',
  messagingSenderId: '322979396805',
  appId: '1:322979396805:web:f0a040d30f219183c704ac',
  measurementId: 'G-K7WWDNF6XY',
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

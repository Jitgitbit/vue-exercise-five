import firebase from 'firebase'
import 'firebase/analytics';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAbkLGzPZUaJ9szDKtNZr3Uh1H08cGnj5I",
  authDomain: "phoenixchat-youchat.firebaseapp.com",
  databaseURL: "https://phoenixchat-youchat.firebaseio.com",
  projectId: "phoenixchat-youchat",
  storageBucket: "phoenixchat-youchat.appspot.com",
  messagingSenderId: "71483402724",
  appId: "1:71483402724:web:cec7110a27d5c02d757ff1",
  measurementId: "G-LBPSZJYJFF"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

firebase.analytics();

// Export firestore db
export default firebaseApp.firestore()
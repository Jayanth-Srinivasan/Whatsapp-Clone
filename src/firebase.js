import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBgQPweYtVFCPDOBRIYEZFjl7BAPph1QEA",
    authDomain: "whatsapp-clone-b66a7.firebaseapp.com",
    projectId: "whatsapp-clone-b66a7",
    storageBucket: "whatsapp-clone-b66a7.appspot.com",
    messagingSenderId: "208223729091",
    appId: "1:208223729091:web:b22dd8420b40961fc67976",
    measurementId: "G-V2VECQ64HK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
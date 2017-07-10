import * as firebase from "firebase";


const config = {
    apiKey: "AIzaSyCxwT2udbQFddsw-_zxoum0lJlJ1VR_rAg",
    authDomain: "voting-app-9a2b1.firebaseapp.com",
    databaseURL: "https://voting-app-9a2b1.firebaseio.com",
    projectId: "voting-app-9a2b1",
    storageBucket: "voting-app-9a2b1.appspot.com",
    messagingSenderId: "517098115982"
  };
  
firebase.initializeApp(config);

const database = firebase.database();

export default database;
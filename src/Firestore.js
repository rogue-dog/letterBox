//const firebase = require("firebase");
import firebase from "firebase";
require("firebase/firestore");
var firaebaseConfig = {
    apiKey: "AIzaSyBxxQvVcnGdondNZ_DnZ9xu85TQvnvysTI",
    authDomain: "letterbox-9c73e.firebaseapp.com",
    projectId: "letterbox-9c73e",
    storageBucket: "letterbox-9c73e.appspot.com",
    messagingSenderId: "496664097691",
    appId: "1:496664097691:web:300033a40f757628a8673e",
    measurementId: "G-0G27CPR603"
};
firebase.initializeApp(firaebaseConfig);

const db = firebase.firestore();

export default db;
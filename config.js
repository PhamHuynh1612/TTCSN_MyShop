const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyChy2oUnUK9uHGIxBLOHCMIIpImO8_x4Ak",
    authDomain: "myapp-8a856.firebaseapp.com",
    projectId: "myapp-8a856",
    storageBucket: "myapp-8a856.appspot.com",
    messagingSenderId: "934616769801",
    appId: "1:934616769801:web:6afa4ad586f2e74a0c1fd8",
    measurementId: "G-0JY42ZK9QW",
    databaseURL: "https://myapp-8a856-default-rtdb.asia-southeast1.firebasedatabase.app"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database()

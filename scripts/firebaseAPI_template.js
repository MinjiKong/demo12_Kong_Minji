//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBGI_GNUls6P-CfKQiG-qfJKZa2WCrcJN8",
    authDomain: "fir-comp1800-e96cb.firebaseapp.com",
    projectId: "fir-comp1800-e96cb",
    storageBucket: "fir-comp1800-e96cb.appspot.com",
    messagingSenderId: "227872544634",
    appId: "1:227872544634:web:9e2fe7d236c926d6df68c3"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
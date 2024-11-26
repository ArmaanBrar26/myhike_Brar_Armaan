//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCtvVlcmF7SsjH3K-7Kd4UQK_P0o1qhEUI",
    authDomain: "comp1800-2024-2bfe9.firebaseapp.com",
    projectId: "comp1800-2024-2bfe9",
    storageBucket: "comp1800-2024-2bfe9.appspot.com",
    messagingSenderId: "847802300993",
    appId: "1:847802300993:web:1dcf831446a6ee2208a4c0"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

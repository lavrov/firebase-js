// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";
import {getMessaging, getToken} from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB5Wz8s7NGkPA4AydXytGkJYNbhNXM1Jj0",
    authDomain: "zaichat-lavrovvv.firebaseapp.com",
    databaseURL: "https://zaichat-lavrovvv-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "zaichat-lavrovvv",
    storageBucket: "zaichat-lavrovvv.appspot.com",
    messagingSenderId: "729286463893",
    appId: "1:729286463893:web:c81588f5bdffc3b324269c"
};

export const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
getToken(
    messaging,
    {vapidKey: "BHGt-t-FhgQBFXjuxnHVva9Bg9nGuKq1Txu-lEbcn_GQqjB_SeIGQWIaRWp-Ho9W6YIuwlert-dKUKSIC6i0tSo"}
).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log('Send the token to your server and update the UI if necessary.');
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});

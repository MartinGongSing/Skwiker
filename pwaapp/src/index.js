import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as firebase from 'firebase'
import firebase from 'firebase/app';



// Copiez et collez ces scripts en bas de votre balise <body>, et ce, avant d'utiliser les services Firebase :


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.4.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyCE_VOw4QqOrcGMCKIBU8TTD25bpG-NEB0",
  authDomain: "pwa-app-515e2.firebaseapp.com",
  projectId: "pwa-app-515e2",
  storageBucket: "pwa-app-515e2.appspot.com",
  messagingSenderId: "787178312215",
  appId: "1:787178312215:web:175ab13e245a190a038252"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

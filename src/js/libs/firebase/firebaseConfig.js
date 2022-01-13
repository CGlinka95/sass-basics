 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAORbZLKYBvWA3tP2WDmnMRZPMOzo85JIY",
    authDomain: "shoeshine8k.firebaseapp.com",
    databaseURL: "https://shoeshine8k-default-rtdb.firebaseio.com",
    projectId: "shoeshine8k",
    storageBucket: "shoeshine8k.appspot.com",
    messagingSenderId: "267102170423",
    appId: "1:267102170423:web:4d48c30aa9d4ab6e357eb2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
  export {app}
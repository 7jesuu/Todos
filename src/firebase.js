import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyASTTY507LbbsDH3YcSjFJyKplFGznYXvQ",
    authDomain: "todos-8e539.firebaseapp.com",
    projectId: "todos-8e539",
    storageBucket: "todos-8e539.appspot.com",
    messagingSenderId: "844771721051",
    appId: "1:844771721051:web:1f513082e899ae3704247e",
    databaseURL: "https://todos-8e539-default-rtdb.europe-west1.firebasedatabase.app/"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  export default firebaseApp;
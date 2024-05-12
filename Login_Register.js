                                                                          
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA_baZ5BOgTRN17sVgEu5ZniAIfJXdk4No",
    authDomain: "recipe-generator-project-4004a.firebaseapp.com",
    projectId: "recipe-generator-project-4004a",
    storageBucket: "recipe-generator-project-4004a.appspot.com",
    messagingSenderId: "197530831320",
    appId: "1:197530831320:web:7f6075fbb9c48538520aad",
    measurementId: "G-VZ5SSQ87ZJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  document.getElementById("signup").addEventListener('click', function(e{
    set(ref(db, 'user/' + document.getElementById("username").value),{
      
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    })
    
  })
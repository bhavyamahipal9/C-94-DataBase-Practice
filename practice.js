var firebaseConfig = {
    apiKey: "AIzaSyCjq6Cl2tZOLOgPj__UGkqtORD31lnaWTk",
    authDomain: "medical-chat-app-2af7a.firebaseapp.com",
    databaseURL: "https://medical-chat-app-2af7a.firebaseio.com",
    projectId: "medical-chat-app-2af7a",
    storageBucket: "medical-chat-app-2af7a.appspot.com",
    messagingSenderId: "662002620515",
    appId: "1:662002620515:web:c40a5d9981843156834056"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child("user_name").update({
        purpose:"Add user"
    });
}

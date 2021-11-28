
var firebaseConfig = {
    apiKey: "AIzaSyBlNUiAh4PjouA8vwsrREAaTU_ESIewM-M",
    authDomain: "covid-19-hnoo.firebaseapp.com",
    databaseURL: "https://covid-19-hnoo-default-rtdb.firebaseio.com",
    projectId: "covid-19-hnoo",
    storageBucket: "covid-19-hnoo.appspot.com",
    messagingSenderId: "919073518702",
    appId: "1:919073518702:web:7a2ba846b2a8b520fce27f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name"); 
     room_name = localStorage.getItem("room_name");
     function send() {
           msg = document.getElementById("msg").value; 
           firebase.database().ref(room_name).push({
                 name: user_name,
                 message: msg
           }); 
           document.getElementById("msg").value=" "; 
     }

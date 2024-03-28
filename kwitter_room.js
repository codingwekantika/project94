const firebaseConfig = {
apiKey: "AIzaSyAs1yjTaklbAQJGQ1j3j6k9GDP6dtA70qU",
authDomain: "kwitterapp-ac5b2.firebaseapp.com",
databaseURL: "https://kwitterapp-ac5b2-default-rtdb.firebaseio.com",
projectId: "kwitterapp-ac5b2",
storageBucket: "kwitterapp-ac5b2.appspot.com",
messagingSenderId: "62916609912",
appId: "1:62916609912:web:06f18db3898dac5aaf2a8d",
measurementId: "G-9FW4BMNC3J"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

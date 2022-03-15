
var firebaseConfig = {
      apiKey: "AIzaSyDUc13WFIi7_jpNQqL5u-FgIKjNa1SuDPA",
      authDomain: "kwitter-636e5.firebaseapp.com",
      databaseURL: "https://kwitter-636e5-default-rtdb.firebaseio.com",
      projectId: "kwitter-636e5",
      storageBucket: "kwitter-636e5.appspot.com",
      messagingSenderId: "891619372170",
      appId: "1:891619372170:web:246f9e06d66fcd85bf5173"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

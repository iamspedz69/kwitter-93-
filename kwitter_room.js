
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDbr3EyEChMUdrVE45tr25Hv722QZboALc",
      authDomain: "classtest-f6a21.firebaseapp.com",
      projectId: "classtest-f6a21",
      storageBucket: "classtest-f6a21.appspot.com",
      messagingSenderId: "628783211896",
      appId: "1:628783211896:web:d55b4755b19fcf64c1548d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

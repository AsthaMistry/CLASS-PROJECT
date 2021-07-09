// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAaU0yO-Ah6XgDcPnV6qHN04Th3zcXPUgc",
      authDomain: "my-own-kwitter.firebaseapp.com",
      projectId: "my-own-kwitter",
      storageBucket: "my-own-kwitter.appspot.com",
      messagingSenderId: "174719321115",
      appId: "1:174719321115:web:af81fcfc503b143f0324be"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


//ADD YOUR FIREBASE LINKS HERE
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

      function addRoom(){
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding_room_name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
      }

      function getData(){
      
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name-" + Room_names);

       row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
       
      });
      });
      }

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

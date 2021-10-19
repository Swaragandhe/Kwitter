
const firebaseConfig = {
      apiKey: "AIzaSyAx0k__ba6nflRpPOXrQDeADm2jtKlDnu0",
      authDomain: "kwiter22.firebaseapp.com",
      databaseURL: "https://kwiter22-default-rtdb.firebaseio.com",
      projectId: "kwiter22",
      storageBucket: "kwiter22.appspot.com",
      messagingSenderId: "371887899090",
      appId: "1:371887899090:web:2e8216ea1cf60516f0880b",
      measurementId: "G-9NS00S14YE"
    };
  
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+ user_name + "!";
    function addRoom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addingroomname"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Roomname-"+ Room_names);
      row="<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div> <hr>"; 
      document.getElementById("output").innerHTML += row;
      });});}
getData(); 
function redirectToRoomName() {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
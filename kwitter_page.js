//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    function send() {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,message:msg,like:0
      
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>" + name + "<img src='tick.png' class='user_tick'> </h4>";
message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Likes:"+ like +"</span></button><hr>";
row=name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updatelike(message_id) {
console.log("clicked on like button"+ message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes=Number(likes)+1;
console.log(update_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:update_likes
});
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

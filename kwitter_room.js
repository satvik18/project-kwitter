// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcA1RtEzEIGVaMwEt9kAybdpbtWcodI2c",
    authDomain: "kwitter-2-b143d.firebaseapp.com",
    databaseURL: "https://kwitter-2-b143d-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-b143d",
    storageBucket: "kwitter-2-b143d.appspot.com",
    messagingSenderId: "525120449366",
    appId: "1:525120449366:web:d4baebb60a794281ff04f7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "add room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                console.log("Room Name -" + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
                document.getElementById("output").innerHTML += row;



                //End code
          });
    });
}
getData();

function redirecttoroomname(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
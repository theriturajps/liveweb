
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    window.location.assign("index.html")
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

  } else {
    // No user is signed in.
    document.getElementById("login_div").style.display = "block";
  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.

    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

var wage = document.getElementById("password_field");
wage.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

var wage2 = document.getElementById("email_field");
wage2.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

function validate(e) {
    var text = e.target.value;
    login()  
}

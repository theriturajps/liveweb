
  // Firebase Database
  var databaseRef = firebase.database().ref('SPLASH_SCREEN');
  var splashscreenRef = databaseRef.child("SplashScreenState");

  var ssc_toggle = document.getElementById("ssc-toggle");
  var ssc_toggle_status = false;

  //Toggle Button State Check
  $(ssc_toggle).on('change', function() {
    if ($(this).is(':checked')) {
      ssc_toggle_status = $(this).is(':checked');
      splashscreenRef.child("SplashScreen").set("on");
    }
    else {
      ssc_toggle_status = $(this).is(':checked');
      splashscreenRef.child("SplashScreen").set("off");
    }
});

splashscreenRef.on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();

    if(childData == "on"){

        ssc_toggle.checked = true;
    } else {

        ssc_toggle.checked = false;
    }
  });
});

  //Check Auth State
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      // User is signed in.

      var user = firebase.auth().currentUser;

      if(user != null){
  
        var email_id = user.email;
        document.getElementById("admin_email_id").innerHTML = email_id;
        document.getElementById("admin_email_id2").innerHTML = email_id;
      }

    } else {

      // No user is signed in.
      window.location.assign("login.html")
    }
  });
  
//SignOut Auth
function logout(){
    firebase.auth().signOut();
}
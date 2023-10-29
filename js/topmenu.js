  
  var databaseRef02 = firebase.database().ref('MAIN_ACTIVITY');
  var topmenustateRef = databaseRef02.child("TopMenuState");

  var top_toggle = document.getElementById("top-toggle");
  var top_toggle_status = false;

  //Toggle Button State Check
  $(top_toggle).on('change', function() {
    if ($(this).is(':checked')) {
      top_toggle_status = $(this).is(':checked');
      topmenustateRef.child("TopMenu").child("state").set("on");
    }
    else {
      top_toggle_status = $(this).is(':checked');
      topmenustateRef.child("TopMenu").child("state").set("off");
    }
});

topmenustateRef.child("TopMenu").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
    var childData = childSnapshot.val();

    if(childData == "on"){

      top_toggle.checked = true;
    } else {

      top_toggle.checked = false;
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
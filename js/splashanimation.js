
  // Firebase Database
  var databaseRef = firebase.database().ref('SPLASH_SCREEN');
  var splashscreenRef = databaseRef.child("SplashScreenState");
  var splashanimRef = databaseRef.child("SplashScreenAnim");

  var ssa_toggle = document.getElementById("ssa-toggle");
  var ssa_toggle_status = true;

  var ssba_toggle = document.getElementById("ssba-toggle");
  var ssba_toggle_status = true;

  var ssfa_toggle = document.getElementById("ssfa-toggle");
  var ssfa_toggle_status = true;

  
 //Toggle Button State Anim Check
 $(ssa_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    ssa_toggle_status = $(this).is(':checked');
    splashanimRef.child("AnimState").child("NoAnim").set("off");
  }
  else {
    ssa_toggle_status = $(this).is(':checked');
    splashanimRef.child("AnimState").child("NoAnim").set("on");
    splashanimRef.child("AnimType01").child("BounceAnim").set("off");
    splashanimRef.child("AnimType02").child("FadeAnim").set("off");
  }
});

//Toggle Button Bounce Anim Check
$(ssba_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    ssba_toggle_status = $(this).is(':checked');
    splashanimRef.child("AnimType01").child("BounceAnim").set("on");
    splashanimRef.child("AnimType02").child("FadeAnim").set("off");
    splashanimRef.child("AnimState").child("NoAnim").set("off");
  }
  else {
    ssba_toggle_status = $(this).is(':checked');
    splashanimRef.child("AnimType01").child("BounceAnim").set("off");
  }
});

//Toggle Button Fade Anim Check
$(ssfa_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    ssfa_toggle_status = $(this).is(':checked');
    splashanimRef.child("AnimType02").child("FadeAnim").set("on");
    splashanimRef.child("AnimType01").child("BounceAnim").set("off");
    splashanimRef.child("AnimState").child("NoAnim").set("off");
  }
  else {
    ssfa_toggle_status = $(this).is(':checked');
    splashanimRef.child("AnimType02").child("FadeAnim").set("off");
  }
});

 //Splash Screen Anim Check
 splashanimRef.child("AnimState").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    ssa_toggle.checked = false;
  } else {

    ssa_toggle.checked = true;
  }
});
});

//Splash Screen Bounce Anim Check
splashanimRef.child("AnimType01").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    ssba_toggle.checked = true;
  } else {

    ssba_toggle.checked = false;
  }
});
});

//Splash Screen Fade Anim Check
splashanimRef.child("AnimType02").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    ssfa_toggle.checked = true;
  } else {

    ssfa_toggle.checked = false;
  }
});
});

// ------------- SET LOGO ------------- //
//Form and Submit Button
document.getElementById('splash_logo_form').addEventListener('submit', submitSplashLogo);

//Form and Submit Function
function submitSplashLogo(e){
  e.preventDefault();
  // Get values
  var URL = getInputVal('splash_logo_input');

  // Send string
  sendLogoData(URL);
}

// Function to get get form values
function getInputVal(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendLogoData(URL){
  var splashLogoRef = splashanimRef.child("SplashLogo").child("SplashScreenLogo");

  splashLogoRef.set(URL);
}

//Set Splash Logo
splashanimRef.child("SplashLogo").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("app_logo").src = logo;
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
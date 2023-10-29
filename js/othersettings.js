var databaseRef02 = firebase.database().ref('MAIN_ACTIVITY');
var appsettingsRef = databaseRef02.child("AppSettings");

var swipe_refresh_toggle = document.getElementById("swipe_refresh_toggle");
var swipe_refresh_toggle_status = true;

var rtl_toggle = document.getElementById("rtl_toggle");
var rtl_toggle_status = true;

var theme_1 = document.getElementById("theme_1");
var theme_2 = document.getElementById("theme_2");
var theme_3 = document.getElementById("theme_3");
var theme_4 = document.getElementById("theme_4");
var theme_5 = document.getElementById("theme_5");
var theme_6 = document.getElementById("theme_6");

var themeState = "0";

//Toggle Button State Check
$(rtl_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    rtl_toggle = $(this).is(':checked');
    appsettingsRef.child("RTL").child("state").set("on");
  }
  else {
    rtl_toggle_status = $(this).is(':checked');
    appsettingsRef.child("RTL").child("state").set("off");
  }
});

appsettingsRef.child("RTL").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    rtl_toggle.checked = true;
  } else {

    rtl_toggle.checked = false;
  }
});
});

//Toggle Button State Check
$(swipe_refresh_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    swipe_refresh_toggle = $(this).is(':checked');
    appsettingsRef.child("SwipeRefresh").child("state").set("on");
  }
  else {
    swipe_refresh_toggle_status = $(this).is(':checked');
    appsettingsRef.child("SwipeRefresh").child("state").set("off");
  }
});

appsettingsRef.child("SwipeRefresh").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    swipe_refresh_toggle.checked = true;
  } else {

    swipe_refresh_toggle.checked = false;
  }
});
});

function setThemeDefault(){

  appsettingsRef.child("AppThemes").child("AppThemeState").child("themeint").set("1");
}

function setTheme2(){

  appsettingsRef.child("AppThemes").child("AppThemeState").child("themeint").set("2");
}

function setTheme3(){

  appsettingsRef.child("AppThemes").child("AppThemeState").child("themeint").set("3");
}

function setTheme4(){

  appsettingsRef.child("AppThemes").child("AppThemeState").child("themeint").set("4");
}

function setTheme5(){

  appsettingsRef.child("AppThemes").child("AppThemeState").child("themeint").set("5");
}

function setTheme6(){

  appsettingsRef.child("AppThemes").child("AppThemeState").child("themeint").set("6");
}

appsettingsRef.child("AppThemes")
.child("AppThemeState")
.on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {

  var childData = childSnapshot.val();

  themeState = childData;

  if(childData == "1"){

    theme_1.classList.add('selected');
    checkStateClass();
  }
  else if (childData == "2"){
    
    theme_2.classList.add('selected');
    checkStateClass();
  }
  else if (childData == "3"){
     
    theme_3.classList.add('selected');
    checkStateClass();
  }
  else if (childData == "4"){
     
    theme_4.classList.add('selected');
    checkStateClass();
  }
  else if (childData == "5"){
     
    theme_5.classList.add('selected');
    checkStateClass();
  }
  else if (childData == "6"){
     
    theme_6.classList.add('selected');
    checkStateClass();
  }  
});
});

function checkStateClass(){

  theme_1.classList.remove('selected');
  theme_2.classList.remove('selected');
  theme_3.classList.remove('selected');
  theme_4.classList.remove('selected');
  theme_5.classList.remove('selected');
  theme_6.classList.remove('selected');

  if(themeState == "1"){

    theme_1.classList.add('selected');
  }
  else if (themeState == "2"){
    
    theme_2.classList.add('selected');
  }
  else if (themeState == "3"){
     
    theme_3.classList.add('selected');
  }
  else if (themeState == "4"){
     
    theme_4.classList.add('selected');
  }
  else if (themeState == "5"){
     
    theme_5.classList.add('selected');
  }
  else if (themeState == "6"){
     
    theme_6.classList.add('selected');
  } 
}

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
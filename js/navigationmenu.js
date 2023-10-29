  
  
  
  var databaseRef02 = firebase.database().ref('MAIN_ACTIVITY');
  var navmenustateRef = databaseRef02.child("NavigationMenuState");
  var loadtitlesRef = databaseRef02.child("LoadPageTitles");
  var loadbgimageRef = databaseRef02.child("LoadBGImage");

  var menu_08_toggle = document.getElementById("menu_08_toggle");
  var menu_08_toggle_status = true;

  var menu_09_toggle = document.getElementById("menu_09_toggle");
  var menu_09_toggle_status = true;

  var menu_10_toggle = document.getElementById("menu_10_toggle");
  var menu_10_toggle_status = true;

  //Toggle Button State Check
$(menu_08_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    menu_08_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu08").child("state").set("on");
  }
  else {
    menu_08_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu08").child("state").set("off");
  }
});

//Toggle Button State Check
$(menu_09_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    menu_09_toggle_status = $(this).is(':checked');
    navmenustateRef.child("NavMenu").child("state").set("on");
  }
  else {
    menu_09_toggle_status = $(this).is(':checked');
    navmenustateRef.child("NavMenu").child("state").set("off");
  }
});

//Toggle Button State Check
$(menu_10_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    menu_10_toggle_status = $(this).is(':checked');
    navmenustateRef.child("SharePageMenu").child("state").set("on");
  }
  else {
    menu_10_toggle_status = $(this).is(':checked');
    navmenustateRef.child("SharePageMenu").child("state").set("off");
  }
});

//Navigation Menu 08 State Check
navmenustateRef.child("Menu08").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    menu_08_toggle.checked = true;
  } else {

    menu_08_toggle.checked = false;
  }
});
});

//Navigation Menu 09 State Check
navmenustateRef.child("NavMenu").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    menu_09_toggle.checked = true;
  } else {

    menu_09_toggle.checked = false;
  }
});
});

//Navigation Menu 10 State Check
navmenustateRef.child("SharePageMenu").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    menu_10_toggle.checked = true;
  } else {

    menu_10_toggle.checked = false;
  }
});
});

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_08_form').addEventListener('submit', submitLoadTitle08);

//Form and Submit Function
function submitLoadTitle08(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle08('load_menu_title_08');

  // Send string
  sendTitleData08(URL);
}

// Function to get get form values
function getInputValTitle08(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData08(URL){
  var ref = loadtitlesRef.child("LoadPageTitle08").child("title");

  ref.set(URL);
}

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_09_form').addEventListener('submit', submitLoadTitle09);

//Form and Submit Function
function submitLoadTitle09(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle09('load_menu_title_09');

  // Send string
  sendTitleData09(URL);
}

// Function to get get form values
function getInputValTitle09(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData09(URL){
  var ref = loadtitlesRef.child("LoadPageTitle09").child("title");

  ref.set(URL);
}

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_10_form').addEventListener('submit', submitLoadTitle10);

//Form and Submit Function
function submitLoadTitle10(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle10('load_menu_title_10');

  // Send string
  sendTitleData10(URL);
}

// Function to get get form values
function getInputValTitle10(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData10(URL){
  var ref = loadtitlesRef.child("LoadPageTitle10").child("title");

  ref.set(URL);
}

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_11_form').addEventListener('submit', submitLoadTitle11);

//Form and Submit Function
function submitLoadTitle11(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle11('load_menu_title_11');

  // Send string
  sendTitleData11(URL);
}

// Function to get get form values
function getInputValTitle11(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData11(URL){
  var ref = databaseRef02 .child("ShareAppText").child("text");

  ref.set(URL);
}

// ------------- IMAGE ------------- //
//Form and Submit Button
document.getElementById('load_menu_icon_12_form').addEventListener('submit', submitLoadBGImage);

//Form and Submit Function
function submitLoadBGImage(e){
  e.preventDefault();
  // Get values
  var URL = getInputValIcon10('load_menu_icon_12');

  // Send string
  sendIconData10(URL);
}

// Function to get get form values
function getInputValIcon10(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendIconData10(URL){
  var ref = loadbgimageRef.child("LoadImage").child("image");

  ref.set(URL);
}

// END SET NAV MENU 10 //

// ------------- NAV MENU 08 ------------- //
//Set Menu Title 08
loadtitlesRef.child("LoadPageTitle08").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_08").innerHTML = logo;
});
});

//Set Menu Title 08
loadtitlesRef.child("LoadPageTitle09").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_09").innerHTML = logo;
});
});

//Set Menu Title 08
loadtitlesRef.child("LoadPageTitle10").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_10").innerHTML = logo;
});
});

//Set Menu Title 08
databaseRef02.child("ShareAppText").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_11").innerHTML = logo;
});
});

//Set Menu Icon 08
loadbgimageRef.child("LoadImage").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_icon_08").src = logo;
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
var databaseRef02 = firebase.database().ref('MAIN_ACTIVITY');
var loadpagesRef = databaseRef02.child("LoadPages");
var loadtitlesRef = databaseRef02.child("LoadPageTitles");
var loadiconsRef = databaseRef02.child("LoadPageIcons");
 
 
 // ------------- NAV MENU 01 ------------- //
//Set Web Site URL 01
loadpagesRef.child("LoadPageUrl01").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_url_01").innerHTML = logo;
});
});

//Set Menu Title 01
loadtitlesRef.child("LoadPageTitle01").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_01").innerHTML = logo;
});
});

//Set Menu Icon 01
loadiconsRef.child("LoadPageIcon01").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_icon_01").src = logo;
});
});

  // ------------- URL ------------- //
//Form and Submit Button
document.getElementById('load_page_url_01_form').addEventListener('submit', submitLoadUrl01);

//Form and Submit Function
function submitLoadUrl01(e){
  e.preventDefault();
  // Get values
  var URL = getInputValURL01('load_page_url_01');

  // Send string
  sendURLData01(URL);
}

// Function to get get form values
function getInputValURL01(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendURLData01(URL){
  var ref = loadpagesRef.child("LoadPageUrl01").child("url");

  ref.set(URL);
}

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_01_form').addEventListener('submit', submitLoadTitle01);

//Form and Submit Function
function submitLoadTitle01(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle01('load_menu_title_01');

  // Send string
  sendTitleData01(URL);
}

// Function to get get form values
function getInputValTitle01(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData01(URL){
  var ref = loadtitlesRef.child("LoadPageTitle01").child("title");

  ref.set(URL);
}

// ------------- ICON ------------- //
//Form and Submit Button
document.getElementById('load_menu_icon_01_form').addEventListener('submit', submitLoadIcon01);

//Form and Submit Function
function submitLoadIcon01(e){
  e.preventDefault();
  // Get values
  var URL = getInputValIcon01('load_menu_icon_01');

  // Send string
  sendIconData01(URL);
}

// Function to get get form values
function getInputValIcon01(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendIconData01(URL){
  var ref = loadiconsRef.child("LoadPageIcon01").child("icon");

  ref.set(URL);
}

// END SET NAV MENU 01 //

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
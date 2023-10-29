
  // Firebase Database
  var databaseRef = firebase.database().ref('SPLASH_SCREEN');
  var splashscreenRef = databaseRef.child("SplashScreenState");
  var splashanimRef = databaseRef.child("SplashScreenAnim");

  var databaseRef02 = firebase.database().ref('MAIN_ACTIVITY');
  var loadpagesRef = databaseRef02.child("LoadPages");
  var loadtitlesRef = databaseRef02.child("LoadPageTitles");
  var loadiconsRef = databaseRef02.child("LoadPageIcons");
  var loadbgimageRef = databaseRef02.child("LoadBGImage");
  var navmenustateRef = databaseRef02.child("NavigationMenuState");
  var loadgoogleadmob = databaseRef02.child("LoadGoogleAdmob");

  var ssc_toggle = document.getElementById("ssc-toggle");
  var ssc_toggle_status = false;

  var ssa_toggle = document.getElementById("ssa-toggle");
  var ssa_toggle_status = true;

  var ssba_toggle = document.getElementById("ssba-toggle");
  var ssba_toggle_status = true;

  var ssfa_toggle = document.getElementById("ssfa-toggle");
  var ssfa_toggle_status = true;

  var menu_02_toggle = document.getElementById("menu_02_toggle");
  var menu_02_toggle_status = true;

  var menu_03_toggle = document.getElementById("menu_03_toggle");
  var menu_03_toggle_status = true;

  var menu_04_toggle = document.getElementById("menu_04_toggle");
  var menu_04_toggle_status = true;

  var menu_05_toggle = document.getElementById("menu_05_toggle");
  var menu_05_toggle_status = true;

  var menu_06_toggle = document.getElementById("menu_06_toggle");
  var menu_06_toggle_status = true;

  var menu_07_toggle = document.getElementById("menu_07_toggle");
  var menu_07_toggle_status = true;

  var menu_08_toggle = document.getElementById("menu_08_toggle");
  var menu_08_toggle_status = true;

  var menu_09_toggle = document.getElementById("menu_09_toggle");
  var menu_09_toggle_status = true;

  var menu_10_toggle = document.getElementById("menu_10_toggle");
  var menu_10_toggle_status = true;

  var banner_ad_toggle = document.getElementById("banner_ad_toggle");
  var banner_ad_toggle_status = true;
  
  var inters_ad_toggle = document.getElementById("inters_ad_toggle");
  var inters_ad_toggle_status = true;

  var google_ads_toggle = document.getElementById("google_ads_toggle");
  var google_ads_toggle_status = true;

  //Toggle Button State Check
  $(menu_02_toggle).on('change', function() {
    if ($(this).is(':checked')) {
      menu_02_toggle_status = $(this).is(':checked');
      navmenustateRef.child("Menu02").child("state").set("on");
    }
    else {
      menu_02_toggle_status = $(this).is(':checked');
      navmenustateRef.child("Menu02").child("state").set("off");
    }
});

//Toggle Button State Check
$(menu_03_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    menu_03_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu03").child("state").set("on");
  }
  else {
    menu_03_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu03").child("state").set("off");
  }
});

//Toggle Button State Check
$(menu_04_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    menu_04_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu04").child("state").set("on");
  }
  else {
    menu_04_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu04").child("state").set("off");
  }
});

//Toggle Button State Check
$(menu_05_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    menu_05_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu05").child("state").set("on");
  }
  else {
    menu_05_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu05").child("state").set("off");
  }
});

//Toggle Button State Check
$(menu_06_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    menu_06_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu06").child("state").set("on");
  }
  else {
    menu_06_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu06").child("state").set("off");
  }
});

//Toggle Button State Check
$(menu_07_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    menu_07_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu07").child("state").set("on");
  }
  else {
    menu_07_toggle_status = $(this).is(':checked');
    navmenustateRef.child("Menu07").child("state").set("off");
  }
});

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

//Navigation Menu 02 State Check
navmenustateRef.child("Menu02").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    menu_02_toggle.checked = true;
  } else {

    menu_02_toggle.checked = false;
  }
});
});

//Navigation Menu 03 State Check
navmenustateRef.child("Menu03").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    menu_03_toggle.checked = true;
  } else {

    menu_03_toggle.checked = false;
  }
});
});

//Navigation Menu 04 State Check
navmenustateRef.child("Menu04").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    menu_04_toggle.checked = true;
  } else {

    menu_04_toggle.checked = false;
  }
});
});

//Navigation Menu 05 State Check
navmenustateRef.child("Menu05").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    menu_05_toggle.checked = true;
  } else {

    menu_05_toggle.checked = false;
  }
});
});

//Navigation Menu 06 State Check
navmenustateRef.child("Menu06").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    menu_06_toggle.checked = true;
  } else {

    menu_06_toggle.checked = false;
  }
});
});

//Navigation Menu 07 State Check
navmenustateRef.child("Menu07").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    menu_07_toggle.checked = true;
  } else {

    menu_07_toggle.checked = false;
  }
});
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

  //Splash Screen State Check
  splashscreenRef.on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();

      if(childData == "on"){

        ssc_toggle.checked = true;
      } else {

        ssc_toggle.checked = false;
      }
    });
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

// ------------- NAV MENU 02 ------------- //
//Set Web Site URL 02
loadpagesRef.child("LoadPageUrl02").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_url_02").innerHTML = logo;
});
});

//Set Menu Title 02
loadtitlesRef.child("LoadPageTitle02").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_02").innerHTML = logo;
});
});

//Set Menu Icon 02
loadiconsRef.child("LoadPageIcon02").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_icon_02").src = logo;
});
});

// ------------- NAV MENU 03 ------------- //
//Set Web Site URL 03
loadpagesRef.child("LoadPageUrl03").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_url_03").innerHTML = logo;
});
});

//Set Menu Title 03
loadtitlesRef.child("LoadPageTitle03").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_03").innerHTML = logo;
});
});

//Set Menu Icon 03
loadiconsRef.child("LoadPageIcon03").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_icon_03").src = logo;
});
});

// ------------- NAV MENU 04 ------------- //
//Set Web Site URL 04
loadpagesRef.child("LoadPageUrl04").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_url_04").innerHTML = logo;
});
});

//Set Menu Title 04
loadtitlesRef.child("LoadPageTitle04").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_04").innerHTML = logo;
});
});

//Set Menu Icon 04
loadiconsRef.child("LoadPageIcon04").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_icon_04").src = logo;
});
});

// ------------- NAV MENU 05 ------------- //
//Set Web Site URL 05
loadpagesRef.child("LoadPageUrl05").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_url_05").innerHTML = logo;
});
});

//Set Menu Title 05
loadtitlesRef.child("LoadPageTitle05").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_05").innerHTML = logo;
});
});

//Set Menu Icon 05
loadiconsRef.child("LoadPageIcon05").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_icon_05").src = logo;
});
});

// ------------- NAV MENU 06 ------------- //
//Set Web Site URL 06
loadpagesRef.child("LoadPageUrl06").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_url_06").innerHTML = logo;
});
});

//Set Menu Title 06
loadtitlesRef.child("LoadPageTitle06").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_06").innerHTML = logo;
});
});

//Set Menu Icon 06
loadiconsRef.child("LoadPageIcon06").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_icon_06").src = logo;
});
});

// ------------- NAV MENU 07 ------------- //
//Set Web Site URL 07
loadpagesRef.child("LoadPageUrl07").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_url_07").innerHTML = logo;
});
});

//Set Menu Title 07
loadtitlesRef.child("LoadPageTitle07").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_title_07").innerHTML = logo;
});
});

//Set Menu Icon 07
loadiconsRef.child("LoadPageIcon07").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var logo = childSnapshot.val();

  document.getElementById("web_site_icon_07").src = logo;
});
});

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

// ------------- SET NAV MENU 01 ------------- //

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


// ------------- SET NAV MENU 02 ------------- //

// ------------- URL ------------- //
//Form and Submit Button
document.getElementById('load_page_url_02_form').addEventListener('submit', submitLoadUrl02);

//Form and Submit Function
function submitLoadUrl02(e){
  e.preventDefault();
  // Get values
  var URL = getInputValURL02('load_page_url_02');

  // Send string
  sendURLData02(URL);
}

// Function to get get form values
function getInputValURL02(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendURLData02(URL){
  var ref = loadpagesRef.child("LoadPageUrl02").child("url");

  ref.set(URL);
}

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_02_form').addEventListener('submit', submitLoadTitle02);

//Form and Submit Function
function submitLoadTitle02(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle02('load_menu_title_02');

  // Send string
  sendTitleData02(URL);
}

// Function to get get form values
function getInputValTitle02(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData02(URL){
  var ref = loadtitlesRef.child("LoadPageTitle02").child("title");

  ref.set(URL);
}

// ------------- ICON ------------- //
//Form and Submit Button
document.getElementById('load_menu_icon_02_form').addEventListener('submit', submitLoadIcon02);

//Form and Submit Function
function submitLoadIcon02(e){
  e.preventDefault();
  // Get values
  var URL = getInputValIcon02('load_menu_icon_02');

  // Send string
  sendIconData02(URL);
}

// Function to get get form values
function getInputValIcon02(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendIconData02(URL){
  var ref = loadiconsRef.child("LoadPageIcon02").child("icon");

  ref.set(URL);
}

// END SET NAV MENU 02 //

// ------------- SET NAV MENU 03 ------------- //

// ------------- URL ------------- //
//Form and Submit Button
document.getElementById('load_page_url_03_form').addEventListener('submit', submitLoadUrl03);

//Form and Submit Function
function submitLoadUrl03(e){
  e.preventDefault();
  // Get values
  var URL = getInputValURL03('load_page_url_03');

  // Send string
  sendURLData03(URL);
}

// Function to get get form values
function getInputValURL03(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendURLData03(URL){
  var ref = loadpagesRef.child("LoadPageUrl03").child("url");

  ref.set(URL);
}

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_03_form').addEventListener('submit', submitLoadTitle03);

//Form and Submit Function
function submitLoadTitle03(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle03('load_menu_title_03');

  // Send string
  sendTitleData03(URL);
}

// Function to get get form values
function getInputValTitle03(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData03(URL){
  var ref = loadtitlesRef.child("LoadPageTitle03").child("title");

  ref.set(URL);
}

// ------------- ICON ------------- //
//Form and Submit Button
document.getElementById('load_menu_icon_03_form').addEventListener('submit', submitLoadIcon03);

//Form and Submit Function
function submitLoadIcon03(e){
  e.preventDefault();
  // Get values
  var URL = getInputValIcon03('load_menu_icon_03');

  // Send string
  sendIconData03(URL);
}

// Function to get get form values
function getInputValIcon03(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendIconData03(URL){
  var ref = loadiconsRef.child("LoadPageIcon03").child("icon");

  ref.set(URL);
}

// END SET NAV MENU 03 //


// ------------- SET NAV MENU 04 ------------- //

// ------------- URL ------------- //
//Form and Submit Button
document.getElementById('load_page_url_04_form').addEventListener('submit', submitLoadUrl04);

//Form and Submit Function
function submitLoadUrl04(e){
  e.preventDefault();
  // Get values
  var URL = getInputValURL04('load_page_url_04');

  // Send string
  sendURLData04(URL);
}

// Function to get get form values
function getInputValURL04(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendURLData04(URL){
  var ref = loadpagesRef.child("LoadPageUrl04").child("url");

  ref.set(URL);
}

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_04_form').addEventListener('submit', submitLoadTitle04);

//Form and Submit Function
function submitLoadTitle04(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle04('load_menu_title_04');

  // Send string
  sendTitleData04(URL);
}

// Function to get get form values
function getInputValTitle04(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData04(URL){
  var ref = loadtitlesRef.child("LoadPageTitle04").child("title");

  ref.set(URL);
}

// ------------- ICON ------------- //
//Form and Submit Button
document.getElementById('load_menu_icon_04_form').addEventListener('submit', submitLoadIcon04);

//Form and Submit Function
function submitLoadIcon04(e){
  e.preventDefault();
  // Get values
  var URL = getInputValIcon04('load_menu_icon_04');

  // Send string
  sendIconData04(URL);
}

// Function to get get form values
function getInputValIcon04(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendIconData04(URL){
  var ref = loadiconsRef.child("LoadPageIcon04").child("icon");

  ref.set(URL);
}

// END SET NAV MENU 04 //

// ------------- SET NAV MENU 05 ------------- //

// ------------- URL ------------- //
//Form and Submit Button
document.getElementById('load_page_url_05_form').addEventListener('submit', submitLoadUrl05);

//Form and Submit Function
function submitLoadUrl05(e){
  e.preventDefault();
  // Get values
  var URL = getInputValURL05('load_page_url_05');

  // Send string
  sendURLData05(URL);
}

// Function to get get form values
function getInputValURL05(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendURLData05(URL){
  var ref = loadpagesRef.child("LoadPageUrl05").child("url");

  ref.set(URL);
}

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_05_form').addEventListener('submit', submitLoadTitle05);

//Form and Submit Function
function submitLoadTitle05(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle05('load_menu_title_05');

  // Send string
  sendTitleData05(URL);
}

// Function to get get form values
function getInputValTitle05(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData05(URL){
  var ref = loadtitlesRef.child("LoadPageTitle05").child("title");

  ref.set(URL);
}

// ------------- ICON ------------- //
//Form and Submit Button
document.getElementById('load_menu_icon_05_form').addEventListener('submit', submitLoadIcon05);

//Form and Submit Function
function submitLoadIcon05(e){
  e.preventDefault();
  // Get values
  var URL = getInputValIcon05('load_menu_icon_05');

  // Send string
  sendIconData05(URL);
}

// Function to get get form values
function getInputValIcon05(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendIconData05(URL){
  var ref = loadiconsRef.child("LoadPageIcon05").child("icon");

  ref.set(URL);
}

// END SET NAV MENU 05 //

// ------------- SET NAV MENU 06 ------------- //

// ------------- URL ------------- //
//Form and Submit Button
document.getElementById('load_page_url_06_form').addEventListener('submit', submitLoadUrl06);

//Form and Submit Function
function submitLoadUrl06(e){
  e.preventDefault();
  // Get values
  var URL = getInputValURL06('load_page_url_06');

  // Send string
  sendURLData06(URL);
}

// Function to get get form values
function getInputValURL06(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendURLData06(URL){
  var ref = loadpagesRef.child("LoadPageUrl06").child("url");

  ref.set(URL);
}

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_06_form').addEventListener('submit', submitLoadTitle06);

//Form and Submit Function
function submitLoadTitle06(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle06('load_menu_title_06');

  // Send string
  sendTitleData06(URL);
}

// Function to get get form values
function getInputValTitle06(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData06(URL){
  var ref = loadtitlesRef.child("LoadPageTitle06").child("title");

  ref.set(URL);
}

// ------------- ICON ------------- //
//Form and Submit Button
document.getElementById('load_menu_icon_06_form').addEventListener('submit', submitLoadIcon06);

//Form and Submit Function
function submitLoadIcon06(e){
  e.preventDefault();
  // Get values
  var URL = getInputValIcon06('load_menu_icon_06');

  // Send string
  sendIconData06(URL);
}

// Function to get get form values
function getInputValIcon06(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendIconData06(URL){
  var ref = loadiconsRef.child("LoadPageIcon06").child("icon");

  ref.set(URL);
}

// END SET NAV MENU 06 //

// ------------- SET NAV MENU 07 ------------- //

// ------------- URL ------------- //
//Form and Submit Button
document.getElementById('load_page_url_07_form').addEventListener('submit', submitLoadUrl07);

//Form and Submit Function
function submitLoadUrl07(e){
  e.preventDefault();
  // Get values
  var URL = getInputValURL07('load_page_url_07');

  // Send string
  sendURLData07(URL);
}

// Function to get get form values
function getInputValURL07(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendURLData07(URL){
  var ref = loadpagesRef.child("LoadPageUrl07").child("url");

  ref.set(URL);
}

// ------------- TITLE ------------- //
//Form and Submit Button
document.getElementById('load_menu_title_07_form').addEventListener('submit', submitLoadTitle07);

//Form and Submit Function
function submitLoadTitle07(e){
  e.preventDefault();
  // Get values
  var URL = getInputValTitle07('load_menu_title_07');

  // Send string
  sendTitleData07(URL);
}

// Function to get get form values
function getInputValTitle07(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendTitleData07(URL){
  var ref = loadtitlesRef.child("LoadPageTitle07").child("title");

  ref.set(URL);
}

// ------------- ICON ------------- //
//Form and Submit Button
document.getElementById('load_menu_icon_07_form').addEventListener('submit', submitLoadIcon07);

//Form and Submit Function
function submitLoadIcon07(e){
  e.preventDefault();
  // Get values
  var URL = getInputValIcon07('load_menu_icon_07');

  // Send string
  sendIconData07(URL);
}

// Function to get get form values
function getInputValIcon07(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendIconData07(URL){
  var ref = loadiconsRef.child("LoadPageIcon07").child("icon");

  ref.set(URL);
}

// END SET NAV MENU 07 //

// ------------- SET NAV MENU 08 ------------- //

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

// ------------- GOOGLE ADMOB ADS MENU ------------- //
//Google Admob Settings

// ------------- APP ID ------------- //
//Form and Submit Button
document.getElementById('load_admob_app_id_form').addEventListener('submit', submitLoadAppID);

//Form and Submit Function
function submitLoadAppID(e){
  e.preventDefault();
  // Get values
  var URL = getInputValAppID('load_admob_app_id');

  // Send string
  sendAppId(URL);
}

// Function to get get form values
function getInputValAppID(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendAppId(URL){
  var ref = loadgoogleadmob .child("AdmobAppId").child("id");

  ref.set(URL);
}

//Set Admob App ID
loadgoogleadmob.child("AdmobAppId").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var appid = childSnapshot.val();

  document.getElementById("load_current_admob_app_id").innerHTML = appid;
});
});

// ------------- BANNER ID ------------- //
//Form and Submit Button
document.getElementById('load_admob_banner_id_form').addEventListener('submit', submitLoadBannerID);

//Form and Submit Function
function submitLoadBannerID(e){
  e.preventDefault();
  // Get values
  var URL = getInputValBannerID('load_admob_banner_id');

  // Send string
  sendBannerId(URL);
}

// Function to get get form values
function getInputValBannerID(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendBannerId(URL){
  var ref = loadgoogleadmob .child("AdmobBannerId").child("id");

  ref.set(URL);
}

//Set Admob App ID
loadgoogleadmob.child("AdmobBannerId").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var appid = childSnapshot.val();

  document.getElementById("load_current_admob_banner_id").innerHTML = appid;
});
});

// ------------- INTERSTITIAL ID ------------- //
//Form and Submit Button
document.getElementById('load_admob_inters_id_form').addEventListener('submit', submitLoadIntersID);

//Form and Submit Function
function submitLoadIntersID(e){
  e.preventDefault();
  // Get values
  var URL = getInputValIntersID('load_admob_inters_id');

  // Send string
  sendIntersId(URL);
}

// Function to get get form values
function getInputValIntersID(URL){
  return document.getElementById(URL).value;
}

// Send data to firebase
function sendIntersId(URL){
  var ref = loadgoogleadmob .child("AdmobIntersId").child("id");

  ref.set(URL);
}

//Set Admob App ID
loadgoogleadmob.child("AdmobIntersId").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var appid = childSnapshot.val();

  document.getElementById("load_current_admob_inters_id").innerHTML = appid;
});
});

//Google Admob State
//Admob Banner Ad Check
loadgoogleadmob.child("AdmobAdsState").child("BannerAdState").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    banner_ad_toggle.checked = true;
    google_ads_toggle.checked = true;
  } else {

    banner_ad_toggle.checked = false;

    if (inters_ad_toggle.checked == false){

      google_ads_toggle.checked = false;
    }
  }
});
});

//Admob Interstitial Ad Check
loadgoogleadmob.child("AdmobAdsState").child("IntersAdState").on('value', function(snapshot) {snapshot.forEach(function(childSnapshot) {
  var childData = childSnapshot.val();

  if(childData == "on"){

    inters_ad_toggle.checked = true;
    google_ads_toggle.checked = true;
  } else {

    inters_ad_toggle.checked = false;

    if (banner_ad_toggle.checked == false){

      google_ads_toggle.checked = false;
    }
  }
});
});

//Toggle Button State Check
$(banner_ad_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    banner_ad_toggle_status = $(this).is(':checked');
    loadgoogleadmob.child("AdmobAdsState").child("BannerAdState").child("state").set("on");
  }
  else {
    banner_ad_toggle_status = $(this).is(':checked');
    loadgoogleadmob.child("AdmobAdsState").child("BannerAdState").child("state").set("off");
  }
});

//Toggle Button State Check
$(inters_ad_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    inters_ad_toggle_status = $(this).is(':checked');
    loadgoogleadmob.child("AdmobAdsState").child("IntersAdState").child("state").set("on");
  }
  else {
    inters_ad_toggle_status = $(this).is(':checked');
    loadgoogleadmob.child("AdmobAdsState").child("IntersAdState").child("state").set("off");
  }
});

//Toggle Button State Check
$(google_ads_toggle).on('change', function() {
  if ($(this).is(':checked')) {
    google_ads_toggle_status = $(this).is(':checked');
    loadgoogleadmob.child("AdmobAdsState").child("BannerAdState").child("state").set("on");
  }
  else {
    google_ads_toggle_status = $(this).is(':checked');
    loadgoogleadmob.child("AdmobAdsState").child("BannerAdState").child("state").set("off");
    loadgoogleadmob.child("AdmobAdsState").child("IntersAdState").child("state").set("off");
  }
});

// ------------- END GOOGLE ADMOB ADS MENU ------------- //

  //Check Auth State
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      // User is signed in.

      var user = firebase.auth().currentUser;

      if(user != null){
  
        var email_id = user.email;
        document.getElementById("admin_email_id").innerHTML = email_id;
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
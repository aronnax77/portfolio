/*****************************************************************************

Author:  Richard Myatt

Code activated by info button designed to show and information panel
previously hidden throught the use of 'display: none;' in the css code.
Requires a reference to material-icons in the head of the html file i.e.
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
           rel="stylesheet">
together with a reference to this script.

******************************************************************************/

// Set initial state of the information panel
var infoVisible = false;

/* This function is activated by an onclick event on the info icon setting the
   state of the display to true or false and the visibility of the panel through
   the 'display' attribute */
function showInfo(panel) {
  var elem = document.getElementById(panel);
  if(infoVisible) {
    elem.style.display = 'none';
    infoVisible = false;
  } else {
    elem.style.display = 'block';
    infoVisible = true;
  }
}

function show() {
  /*var elem = document.getElementById("tom");
  elem.scrollIntoView();*/
  window.location.hash = 'tom';
}

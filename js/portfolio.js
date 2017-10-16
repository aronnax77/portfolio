/* Routines taken from YouTube video by Adam Kouri and modified for use with
a single button */

/* Smooth scroll routines consisting of global variables scrolly, distance,
speed, and headerOffset together with three functions autoScrollChoice(elem),
autoScrollTo(elem), and resetScroller(elem).  Please see below for details of
their individual use. */


var scrollY = 0;        /* variable to hold the new scroll position */
var distance = 40;      /* distance to animate each scroll increment */
var speed = 24;         /* speed of scroll in milliseconds */
var headerOffset = 50;  /* allows for the depth of a fixed or sticky header */


/* Use this function if the same button is to be used to scroll both up and down.
Checks to see if the new scroll position is above or below the current scroll
position and redirects action to the correct handler.  This routine might be
used where a fixed or sticky header is employed with menu buttons. */
function autoScrollChoice(elem) {
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(elem).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHeight;

  if (currentY < targetY) {
    autoScrollTo(elem);
  } else {
    resetScroller(elem);
  }
}


/* This function causes the scroll to move down and can be called from a button
at the top of the page */
function autoScrollTo(elem) {
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(elem).offsetTop - headerOffset;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHeight;

  var animator = setTimeout('autoScrollTo(\''+elem+'\')', speed);
  if(yPos > bodyHeight) {
    clearTimeout(animator);
  } else {
    if(currentY < targetY - distance) {
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    } else {
      clearTimeout(animator);
    }
  }
}


/* This function causes the scroll to move up and can be called from a button
at a location to which the page has already been scrolled */
function resetScroller(elem) {
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(elem).offsetTop - headerOffset;

  var animator = setTimeout('resetScroller(\''+elem+'\')', speed);
  if(currentY > targetY) {
    scrollY = currentY - distance;
    window.scroll(0, scrollY);
  } else {
    clearTimeout(animator);
  }
}

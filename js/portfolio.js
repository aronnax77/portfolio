var scrollY = 0;
  var distance = 40;
  var speed = 24;

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

  function autoScrollTo(elem) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(elem).offsetTop - 50;
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

  function resetScroller(elem) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(elem).offsetTop - 50;

    var animator = setTimeout('resetScroller(\''+elem+'\')', speed);
    if(currentY > targetY) {
      scrollY = currentY - distance;
      window.scroll(0, scrollY);
    } else {
      clearTimeout(animator);
    }
  }

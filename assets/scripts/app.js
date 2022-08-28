function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = 'flex';
  evt.currentTarget.className += ' active';
}

// slideshow

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('mySlides-one');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

var slideTwoIndex = 0;
carouselTwo();

function carouselTwo() {
  var i;
  var x = document.getElementsByClassName('mySlides-two');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideTwoIndex++;
  if (slideTwoIndex > x.length) {
    slideTwoIndex = 1;
  }
  x[slideTwoIndex - 1].style.display = 'block';
  setTimeout(carouselTwo, 4000); // Change image every 2 seconds
}

// responsive slideshow
var slideIndexTwo = 0;
carouselRes();

function carouselRes() {
  var i;
  var x = document.getElementsByClassName('mySlides-res');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndexTwo++;
  if (slideIndexTwo > x.length) {
    slideIndexTwo = 1;
  }
  x[slideIndexTwo - 1].style.display = 'block';
  setTimeout(carouselRes, 3000); // Change image every 2 seconds
}

// When the user scrolls the page, execute stickyNav
window.onscroll = function () {
  stickyNav();
  stickyLogo();
  addMargin();
};

// Get the navbar
var navbar = document.getElementById('sticky-nav');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset > 50 + sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
// Get the header
var header = document.getElementById('header-logo');

// Get the offset position of the header
var stickLogo = header.offsetTop;

// Add the stickLogo class to the header when you reach its scroll position. Remove "stickLogo" when you leave the scroll position
function stickyLogo() {
  if (window.pageYOffset > 50 + stickLogo) {
    header.classList.add('logo-stick');
  } else {
    header.classList.remove('logo-stick');
  }
}

var guide = document.getElementById('alibaba-guide');

function addMargin() {
  if (window.pageYOffset > 50 + stickLogo) {
    guide.classList.add('add-margin');
  } else {
    guide.classList.remove('add-margin');
  }
}

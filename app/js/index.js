const $ = require('jquery');
const map = require('./map.js');

if($('#map').length) {
  map()
}

const flipper = require('./flipper.js');

if($('.authorize-btn').length) {
  flipper()
}

const hamburgerMenu = require('./ham-menu.js');

if($('.hamburger-menu').length) {
  hamburgerMenu()
}

const parallax = require('./parallax.js');

if($('.header-title__bg').length) {
  parallax()
}

const scrollMenu = require('./scroll-articles.js');

if($('.aside').length) {
  scrollMenu()
}

// const svgScroll = require('./skills.js');

// if($('.circles').length) {
//   svgScroll()
// }

const modalWindow = require('./modal-window.js');

if($('.form-buttons_submit').length) {
  modalWindow()
}

const email = require('./callback.js');

if($('.callback-form').length) {
  email()
}

const preloder =require('./preloader.js');

if($('.preloader').length) {
  preloder()
}


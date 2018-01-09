/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//////////////////////////////////
/** Tabs active in admin panel */
//////////////////////////////////
// function tabsMenu() {
//   let tabsMenu = document.querySelector('.tabs');
//   tabsMenu.addEventListener('click', function(e) {
    // e.preventDefault(); 
//     let currentTab = e.target; 
//     let tab = currentTab.closest('.tabs__btn'); 
//     let tabs = document.querySelectorAll('.tabs__btn');

//     if(!tab.classList.contains('tabs__btn--active')) {
//       for (let i=0; i<tabs.length; i++) {
//         tabs[i].classList.remove('tabs__btn--active');
//       }
//       tab.classList.add('tabs__btn--active');
//     }
//     else {
//       tab.classList.remove('tabs__btn--active');
//     }
//   });
// }

// tabsMenu();//END

///////////////////////////////////
/** Flipper */
///////////////////////////////////

let flipper = (function () {
  let login = document.querySelector('.authorize-btn');
  let flip = document.querySelector('.flipper');
  let mainPageBtn = document.querySelector('.btn-main-page');

  login.addEventListener('click', e => {
    flip.classList.add('flipper--hover');
    login.classList.add('authorize-btn--active');
  });
  mainPageBtn.addEventListener('click', e => {
    e.preventDefault();
    flip.classList.remove('flipper--hover');
    login.classList.remove('authorize-btn--active');
  })
  return 
})()
flipper();

///////////////////////////////////
/** Hamburger-menu */
///////////////////////////////////

// let hamburgerMenu = function() {
//   let menuBtn = document.querySelector('.hamburger-menu');
//   let overlay = document.querySelector('.overlay');
//   let body = document.querySelector('body');

//   menuBtn.addEventListener('click', e => {
//     overlay.classList.toggle('overlay--active');
//     body.classList.toggle('body--active');
//     menuBtn.classList.toggle('hamburger-menu--active');
//   });
//   return
// }
// hamburgerMenu();

///////////////////////////////////
/** Parallax */
///////////////////////////////////

// let parallax = (function() {
//   let bg = document.querySelector('.hero__bg');
//   let title = document.querySelector('.svg-portfolio_header-dims');
//   let ava = document.querySelector('.owner__img');
//   let desc = document.querySelector('.owner__desc')


//   return {
//     move: function(block, windowScroll, strafeAmount) {
//       let strafe = windowScroll / -strafeAmount + '%';
//       let transformString = 'translate3d(0, ' + strafe + ' , 0)';

//       let style = block.style;

//       style.transform = transformString;
//       style.webkitTransform = transformString;
//     },

//     init: function(wScroll) {
//       this.move(bg, wScroll, 20);
//       this.move(title, wScroll, 10);
//       this.move(ava, wScroll, 3);
//       this.move(desc, wScroll, 1);
//     }
//   }
// }()); 

// window.onscroll = function() {
//   var wScroll = window.pageYOffset;

//   parallax.init(wScroll);
// }

/***/ })
/******/ ]);
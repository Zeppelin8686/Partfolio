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
//     // e.preventDefault(); //remove basic link options
//     let currentTab = e.target; //current tab which you click
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

function flipper() {
  let login = document.querySelector('.hero__autorize-btn');
  let flip = document.querySelector('.flipper');
  let mainPageBtn = document.querySelector('.btn-main-page');

  login.addEventListener('click', e => {
    flip.classList.add('flipper--hover');
    console.log(flip)
  });
  mainPageBtn.addEventListener('click', e => {
    e.preventDefault();
    flip.classList.remove('flipper--hover');
  })
}

flipper();


/***/ })
/******/ ]);
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
let hamburgerMenu = function() {
  let menuBtn = document.querySelector('.hamburger-menu');
  let overlay = document.querySelector('.overlay');
  let body = document.querySelector('body');

  menuBtn.addEventListener('click', e => {
    overlay.classList.toggle('overlay--active');
    body.classList.toggle('body--active');
    menuBtn.classList.toggle('hamburger-menu--active');
  });
}

module.exports = hamburgerMenu;
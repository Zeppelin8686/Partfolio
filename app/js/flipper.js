let flipper = function () {
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
}

module.exports = flipper;
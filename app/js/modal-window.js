function modalWindow() {
  let submitBtn = document.querySelector('.form-buttons_submit')
      modalWindow = document.querySelectorAll('.modal-window');
      closeBtn = document.querySelectorAll('.close-btn')
      


  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', e => {
      e.preventDefault();

      for (let i = 0; i < modalWindow.length; i++ ) {
        modalWindow[i].classList.remove('modal-window--active')
      }
    });
  }
}

module.exports = modalWindow;
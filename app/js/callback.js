let submitForm = function (e) {
  e.preventDefault()

  let form = $(e.target),
      data = form.serialize(),
      url = form.attr('action');

  let request = $.ajax({
        type: 'POST',
        url: url,
        data: data,
        // dataType: 'JSON'
    });

  request.done(function(msg) {
    let modalWindowSent = document.querySelector('.modal-window__sent');
      modalWindowSent.classList.add('modal-window--active')
  });

  request.fail(function(jqXHR) {
    let modalWindowError = document.querySelector('.modal-window__error');
      modalWindowError.classList.add('modal-window--active')
  });

  request.always(function(jqXHR) {
    document.querySelector('.callback-form').reset(); 
  })
}

let email = function () {
  let form = document.querySelector('.callback-form');

  form.addEventListener('submit', submitForm)
}

// module.exports = $('.callback-form').on('submit', submitForm);

module.exports = email;
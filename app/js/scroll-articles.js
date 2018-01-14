let switchLink = function () {
  let wScroll = window.pageYOffset;
  let asideList = document.querySelector('.aside__list');
  let articles = document.querySelectorAll('.article');
  let asideItems = document.querySelectorAll('.aside__item');
  let body = document.querySelector('body');
  let html = document.querySelector('html');

  //переключение активного класса по клику
  for (let i = 0; i < asideItems.length; i++) {
    asideItems[i].addEventListener('click', function (e) {
      e.preventDefault();
      currentItem = e.target;
      let item = currentItem.closest('.aside__item');

      if (!item.classList.contains('aside__item--active')) {
        for (let i = 0; i < asideItems.length; i++) {
          asideItems[i].classList.remove('aside__item--active');
        }
        item.classList.add('aside__item--active');
      }
      else {
        item.classList.remove('aside__item--active');
      }
    });
}

  // for (let i=0; i<articles.length; i++) {
  //   let posX = articles[i].offsetTop;
  //   // console.log('x=[' + posX + ']')

  //   if (posX <= wScroll) {
  //     for (let i=0; i<asideItems.length; i++) {
  //       asideItems[i].addEventListener('scroll', function(e){
  //         currentItem = e.target;
  //         currentItem.classList.add('aisde__item--active')
  //       })
  //     }
  //   }
  // } 




}

module.exports = switchLink;
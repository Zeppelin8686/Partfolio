let parallax = (function() {
  let bg = document.querySelector('.hero__bg');
  let title = document.querySelector('.header-title__bg');
  let ava = document.querySelector('.owner__img');
  let desc = document.querySelector('.owner__desc')


  return {
    move: function(block, windowScroll, strafeAmount) {
      let strafe = windowScroll / -strafeAmount + '%';
      let transformString = 'translate3d(0, ' + strafe + ' , 0)';

      let style = block.style;

      style.transform = transformString;
      style.webkitTransform = transformString;
    },

    init: function(wScroll) {
      this.move(bg, wScroll, 20);
      this.move(title, wScroll, 10);
      this.move(ava, wScroll, 3);
      this.move(desc, wScroll, 1);
    }
  }
}()); 

window.onscroll = function() {
  var wScroll = window.pageYOffset;

  parallax.init(wScroll);
  
}

module.exports = window.onscroll;
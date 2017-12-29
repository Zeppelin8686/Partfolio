//////////////////////////////////
/** Tabs active in admin panel */
//////////////////////////////////
function tabsMenu() {
  let tabsMenu = document.querySelector('.tabs');
  tabsMenu.addEventListener('click', function(e) {
    // e.preventDefault(); //remove basic link options
    let currentTab = e.target; //current tab which you click
    let tab = currentTab.closest('.tabs__btn'); 
    let tabs = document.querySelectorAll('.tabs__btn');

    if(!tab.classList.contains('tabs__btn--active')) {
      for (let i=0; i<tabs.length; i++) {
        tabs[i].classList.remove('tabs__btn--active');
      }
      tab.classList.add('tabs__btn--active');
    }
    else {
      tab.classList.remove('tabs__btn--active');
    }
  });
}

tabsMenu();//END

///////////////////////////////////
/** */
///////////////////////////////////
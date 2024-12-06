/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-navigation--opened')) {
    navMain.classList.remove('main-navigation--opened');
    navMain.classList.add('main-navigation');
  } else {
    navMain.classList.add('main-navigation--opened');
    navMain.classList.remove('main-navigation');
  }
});
navMain.classList.remove('main-header__toggle--nojs');
navToggle.addEventListener('click', () => {
  if (navToggle.classList.contains('main-header__toggle--close')) {
    navToggle.classList.remove('main-header__toggle--close');
    navToggle.classList.add('main-header__toggle--open');
  } else {
    navToggle.classList.add('main-header__toggle--close');
    navToggle.classList.remove('main-header__toggle--open');
  }
});

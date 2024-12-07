/* в этот файл добавляет скрипты*/
const header = document.querySelector('.main-header');
const burgerButton = document.querySelector('.main-header__toggle');

header.classList.remove ('main-header--nojs');
burgerButton.addEventListener('click', () => {
  header.classList.toggle ('main-header--opened');
});

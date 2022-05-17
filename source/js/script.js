let headerList = document.querySelector('.main-nav');
let headerToggle = document.querySelector('.header__toggle');
let mainHeader = document.querySelector('.main-header');



mainHeader.classList.remove('main-header__no-js');
headerToggle.classList.remove('header__toggle--no-js');
headerList.classList.remove('main-nav__no-js');



headerToggle.addEventListener('click', function () {
  headerToggle.classList.toggle('header__toggle--open-menu');
  headerToggle.classList.toggle('header__toggle--closed-menu');
  headerList.classList.toggle('main-nav__no-js');
  mainHeader.classList.toggle('main-header__open-menu');
});

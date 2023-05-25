// header burger button
const menuBtn = document.querySelector('button.header__burger');
const menuToDisplay = document.querySelector('.header__menu');

const handleMenuBtnClick = () => {
  if (menuBtn.classList.contains('header__burger_active')) {
    menuBtn.classList.remove('header__burger_active');
    menuToDisplay.classList.remove('header__menu_active');
  } else {
    menuBtn.classList.add('header__burger_active');
    menuToDisplay.classList.add('header__menu_active');
  }
};

menuBtn.addEventListener('click', handleMenuBtnClick);

// locale
const locale = document.querySelector('.locale');

const handleLocaleClick = () => {
  if (locale.classList.contains('locale_active')) {
    locale.classList.remove('locale_active');
  } else {
    locale.classList.add('locale_active');
  }
};

locale.addEventListener('click', handleLocaleClick);

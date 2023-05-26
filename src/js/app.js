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

// services dropdown
const dropdown = document.querySelector('.services-dropdown');

const handleDropdownClick = () => {
  if (dropdown.classList.contains('services-dropdown_active')) {
    dropdown.classList.remove('services-dropdown_active');
  } else {
    dropdown.classList.add('services-dropdown_active');
  }
};

dropdown.addEventListener('click', handleDropdownClick);

// services slider
$('.services__slider').slick({
  variableWidth: false,
  arrows: true,
  slidesToShow: 5,
  prevArrow: $('.services__prev'),
  nextArrow: $('.services__next'),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        variableWidth: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        variableWidth: false,
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        variableWidth: false,
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        variableWidth: true,
        arrows: false,
      },
    },
  ],
});

// how to become slider
const becomeSliderInit = () => {
  $('.become__slider').slick({
    dots: true,
    prevArrow: $('#become-prev'),
    nextArrow: $('#become-next'),
    appendDots: $('.become-dots'),
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
};

// features tabs
const featuresCards = document.querySelectorAll('.feature');

featuresCards.forEach((card) => {
  const list = card.querySelector('.feature__list_secondary');
  const more = card.querySelector('.feature__show-more');

  if (!more || !list) return;

  more.addEventListener('click', () => {
    if (more.classList.contains('feature__show-more_active')) {
      more.classList.remove('feature__show-more_active');
      more.querySelector('p').innerHTML = 'View all features';
      list.classList.remove('feature__list_secondary_active');
    } else {
      more.classList.add('feature__show-more_active');
      more.querySelector('p').innerHTML = 'Hide all features';
      list.classList.add('feature__list_secondary_active');
    }
  });
});

// events slider
$('.events__slider').slick({
  variableWidth: false,
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      variableWidth: true,
    },
  ],
});

const becomeSliderUpdate = (width) => {
  if (width >= 1440) {
    if (
      document
        .querySelector('.become__slider')
        .classList.contains('slick-initialized')
    )
      $('.become__slider').slick('unslick');
  } else {
    if (
      !document
        .querySelector('.become__slider')
        .classList.contains('slick-initialized')
    )
      becomeSliderInit();
  }
};

const screens = [...document.querySelectorAll('[data-screen]')].map((el) => [
  el,
  el.parentElement,
]);
const screensUpdate = (width) => {
  screens.forEach(([element, parent]) => {
    const { screen } = element.dataset;
    const [from, to] = screen
      .split(':')
      .map((v) => (v === '' ? Infinity : Number(v)));
    if (width >= from && width < to) {
      if ([...parent.childNodes.values()].includes(element)) return;
      parent.appendChild(element);
    } else {
      element.remove();
    }
  });
};

const handleResize = () => {
  const _w = window.innerWidth;
  // console.log(_w);
  becomeSliderUpdate(_w);
  screensUpdate(_w);
};
handleResize();

window.addEventListener('resize', handleResize);

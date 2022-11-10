const footerListNav = document.querySelectorAll('.footer__nav-list');
const footerNavTitle = document.querySelectorAll('.footer__nav-title');
let viewport = document.documentElement.clientWidth;

if (viewport <= 767) {
  footerListNav.forEach(function (userItem) {
    userItem.classList.toggle('footer__nav-list--hidden');
  });
  footerNavTitle.forEach(function (ss) {
    const current =
      ss.parentElement.getElementsByClassName('footer__nav-list')[0];

    ss.addEventListener('click', function () {
      ss.parentElement
          .getElementsByClassName('footer__nav-list')[0]
          .classList.toggle('footer__nav-list--hidden');
      const isClosed = current.classList.contains('footer__nav-list--hidden');
      if (isClosed) {
        return;
      }
      footerListNav.forEach((zz) => {
        if (zz !== current) {
          zz.classList.add('footer__nav-list--hidden');
        }
      });
    });
  });
}

const addText = () => {
  const button = document.querySelector('.about__button');
  let aboutText = document.getElementsByClassName('about__text');
  const arrayAboutText = Array.from(aboutText);
  let arrayAboutTextEnd = arrayAboutText.slice(2);

  arrayAboutTextEnd.forEach((ss) => {
    ss.classList.toggle('about__text--hidden');
  });

  button.addEventListener('click', () => {
    arrayAboutTextEnd.forEach((ss) => {
      ss.classList.toggle('about__text--hidden');

      if (ss.classList.contains('about__text--hidden')) {
        button.textContent = 'подробнее';
      } else {
        button.textContent = 'свернуть';
      }
    });
  });
};

const addScroll = () => {
  const mainPageButton = document.querySelector('.main-page__button');
  const form = document.querySelector('.form');

  const isScroll = () => {
    form.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };
  mainPageButton.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      isScroll();
    }
  });

  mainPageButton.addEventListener('click', isScroll);
};

const addMask = () => {
  document.addEventListener('DOMContentLoaded', function () {
    let eventCalllback = function (e) {
      let el = e.target;
      let clearVal = el.dataset.phoneClear;
      let pattern = el.dataset.phonePattern;
      let matrixDef = '+7(___) ___-__-__';
      let matrix = pattern ? pattern : matrixDef;
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = e.target.value.replace(/\D/g, '');
      if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = '';
          return;
        }
      }
      if (def.length >= val.length) {
        val = def;
      }
      e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
            ? ''
            : a;
      });
    };
    let phoneInputs = document.querySelectorAll('.form__input--tel');
    for (let elem of phoneInputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  });
};

addText();
addScroll();
addMask();

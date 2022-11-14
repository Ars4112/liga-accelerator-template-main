const footerListNav = document.querySelectorAll('.footer__nav-list');
const footerNavTitle = document.querySelectorAll('.footer__nav-title');
const footerNavElement = document.querySelectorAll('.footer__nav-element');
let viewport = document.documentElement.clientWidth;

if (viewport <= 767) {
  footerNavElement.forEach((element)=> {
    element.classList.toggle('footer__nav-element--opened');
  });
  footerListNav.forEach((userItem)=> {
    userItem.classList.toggle('footer__nav-list--hidden');
  });
  footerNavTitle.forEach(function (titleElement) {
    const current =
      titleElement.parentElement.querySelectorAll('.footer__nav-list')[0];

    const currentElement = titleElement.parentElement.querySelectorAll('.footer__nav-element')[0];

    titleElement.addEventListener('click', function () {
      current.classList.toggle('footer__nav-list--hidden');

      const isClosed = current.classList.contains('footer__nav-list--hidden');

      if (!isClosed) {
        currentElement.classList.add('footer__nav-element--closed');

      } else {
        currentElement.classList.remove('footer__nav-element--closed');
      }

      if (isClosed) {
        return;
      }

      footerListNav.forEach((listElement) => {
        if (listElement !== current) {
          listElement.classList.add('footer__nav-list--hidden');
          listElement.parentElement.querySelectorAll('.footer__nav-element')[0].classList.remove('footer__nav-element--closed');
        }
      });
    });
  });
}

const addText = () => {
  const button = document.querySelector('.about__button');
  let aboutText = document.querySelectorAll('.about__text-module');
  const arrayAboutText = Array.from(aboutText);
  let arrayAboutTextEnd = arrayAboutText.slice(3);

  if (viewport <= 767) {
    arrayAboutTextEnd = arrayAboutText.slice(2);
  }

  arrayAboutTextEnd.forEach((element) => {
    element.classList.toggle('about__text--hidden');
  });

  if (button) {
    button.addEventListener('click', () => {
      arrayAboutTextEnd.forEach((buttonElement) => {
        buttonElement.classList.toggle('about__text--hidden');

        if (buttonElement.classList.contains('about__text--hidden')) {
          button.textContent = 'подробнее';
        } else {
          button.textContent = 'свернуть';
        }
      });
    });
  }
};

const addScroll = () => {
  const mainPageButton = document.querySelector('.main-page__button');
  const form = document.querySelector('.form');

  const isScroll = (evt) => {
    evt.preventDefault();
    form.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  if (mainPageButton) {
    mainPageButton.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter') {
        isScroll();
      }
    });

    mainPageButton.addEventListener('click', isScroll);
  }


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
          // e.target.value = '';
          return;
        }
      }
      if (def.length >= val.length) {
        val = def;
      }
      e.target.value = matrix.replace(/./g, function (a) {
        if (/[_\d]/.test(a) && i < val.length) {
          return (val.charAt(i++));
        } else if (i >= val.length) {
          return ('');
        } else {
          return (a);
        }
      });
    };
    let phoneInputs = document.querySelectorAll('input[name="tel"]');
    for (let elem of phoneInputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  });
};

document.querySelectorAll('.form form').forEach((item)=> {
  item.addEventListener('submit', (evt)=> {
    let phoneInput = item.querySelector('input[name="tel"]');
    if (phoneInput.value.replaceAll(/\D/g, '').length < 11) {
      evt.preventDefault();
      phoneInput.parentElement.querySelectorAll('span')[1].classList.remove('form__message-hidden');
    }
  });
});

addText();
addScroll();
addMask();

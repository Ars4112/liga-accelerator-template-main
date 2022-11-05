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

const addText = ()=> {
  const button = document.querySelector('.about__button');
  let aboutText = document.getElementsByClassName('about__text');
  const arrayAboutText = Array.from(aboutText);
  let arrayAboutTextEnd = arrayAboutText.slice(2);

  arrayAboutTextEnd.forEach((ss)=> {
    ss.classList.toggle('about__text--hidden');

  });

  button.addEventListener('click', ()=> {
    arrayAboutTextEnd.forEach((ss)=> {
      ss.classList.toggle('about__text--hidden');

      if (ss.classList.contains('about__text--hidden')) {
        button.textContent = 'подробнее';
      } else {
        button.textContent = 'свернуть';
      }
    });
  });
};

addText();

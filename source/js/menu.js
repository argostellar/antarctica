'use strict';

// menu.js - модуль управления открытием-закрытием меню
(function () {
  const header = document.querySelector(`.main-header`);
  const menuOpenBtn = document.querySelector(`.main-header__menu-btn`);
  const menuClsBtn = document.querySelector(`.main-header__cls-btn`);
  const body = document.body;

  if (header && body) {
    header.classList.remove(`main-header--no-js`);
    header.classList.add(`main-header--closed`);

    const onBtnOpen = () => {
      header.classList.remove(`main-header--closed`);
      body.classList.add(`overlay`);
      body.style.position = 'fixed';
      body.style.top = `-${window.scrollY}px`;
    };

    const onBtnClose = () => {
      header.classList.add(`main-header--closed`);
      body.classList.remove(`overlay`);
      const scrollY = document.body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };

    if (menuOpenBtn) {
      menuOpenBtn.addEventListener(`click`, onBtnOpen);
    }

    if (menuClsBtn) {
      menuClsBtn.addEventListener(`click`, onBtnClose);
    }
  }
})();

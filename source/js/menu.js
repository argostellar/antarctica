'use strict';

// menu.js - модуль управления открытием-закрытием меню
(function () {
  const header = document.querySelector(`.main-header`);
  const menuOpenBtn = document.querySelector(`.main-header__menu-btn`);
  const menuClsBtn = document.querySelector(`.main-header__cls-btn`);

  if (header) {
    header.classList.remove(`main-header--no-js`);
    header.classList.add(`main-header--closed`);

    const onBtnOpen = () => {
      header.classList.remove(`main-header--closed`);
    };

    const onBtnClose = () => {
      header.classList.add(`main-header--closed`);
    };

    if (menuOpenBtn) {
      menuOpenBtn.addEventListener(`click`, onBtnOpen);
    }

    if (menuClsBtn) {
      menuClsBtn.addEventListener(`click`, onBtnClose);
    }
  }
})();

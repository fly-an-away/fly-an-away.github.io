/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");




swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination]);
var swiperConts = document.querySelector('.swiper');
var swiperWrappers = document.querySelector('.swiper-wrapper'); // let swiperSlide = document.querySelector('.swiper-slide');

var swiperPags = document.querySelector('.swiper-pagination');
var menu = document.querySelector('.section');
var swiper = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](".swiper", {
  loop: false,
  enabled: false,
  width: 240,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 1
    }
  }
});

if (window.innerWidth >= 768) {
  swiper[0].destroy();
  swiper[1].destroy();
  swiper[2].destroy();
  swiper.enabled = "false";
  var elements = document.querySelectorAll(".swiper-slide");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.classList.remove("swiper-slide");
  }

  for (var j = 0; j < swiperConts.length; j++) {
    var swiperCont = swiperConts[j];
    swiperCont.classList.remove("swiper");
  }

  for (var w = 0; w < swiperWrappers.length; w++) {
    var swiperWrapper = swiperWrappers[w];
    swiperWrapper.classList.remove("swiper-wrapper");
  }

  for (var p = 0; p < swiperPags.length; p++) {
    var swiperPag = swiperPags[p];
    swiperPag.classList.add("hidden");
  }
}

var burger = document.querySelectorAll('.btn__burger');
burger.forEach(function (el) {
  el.addEventListener('click', function (e) {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    } else {
      menu.classList.add('show');
    }
  });
});
var close = document.querySelectorAll('.btn-close');
close.forEach(function (el) {
  el.addEventListener('click', function (e) {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    } else {
      menu.classList.add('show');
    }
  });
});
var wrap = document.querySelector('.section-wrapper');
console.log(wrap);
menu.addEventListener('click', function (e) {
  var inner = e.composedPath().includes(wrap);

  if (!inner) {
    menu.classList.remove('show');
  }
});

showAll.onclick = function () {
  var wrapper = document.querySelector('.wrapper');
  var cards = document.querySelector('.cards');

  if (showAll.classList.contains('show')) {
    if (window.innerWidth >= 768 && 1440 >= window.innerWidth) {
      cards.classList.add('section-middle');
      wrapper.classList.add('wrapper-middle');
      showAll.classList.remove('show');
      showAll.classList.add('hide');
    } else {
      cards.classList.add('section-desk');
      wrapper.classList.add('wrapper-desk');
      showAll.classList.remove('show');
      showAll.classList.add('hide');
    }

    ;
  } else {
    if (window.innerWidth >= 768 && 1440 >= window.innerWidth) {
      cards.classList.remove('section-middle');
      wrapper.classList.remove('wrapper-middle');
      showAll.classList.remove('hide');
      showAll.classList.add('show');
    } else {
      cards.classList.remove('section-desk');
      wrapper.classList.remove('wrapper-desk');
      showAll.classList.remove('hide');
      showAll.classList.add('show');
    }

    ;
  }

  ;
};

window.addEventListener("resize", function () {
  window.location.reload();
});

showAll2.onclick = function () {
  var wrapper2 = document.querySelector('.wrapper2');
  var repairs = document.querySelector('.repairs');

  if (showAll2.classList.contains('show')) {
    if (window.innerWidth >= 768 && 1440 >= window.innerWidth) {
      repairs.classList.add('section-middle');
      wrapper2.classList.add('wrapper-middle');
      showAll2.classList.remove('show');
      showAll2.classList.add('hide');
    } else {
      repairs.classList.add('section-desk');
      wrapper2.classList.add('wrapper-desk');
      showAll2.classList.remove('show');
      showAll2.classList.add('hide');
    }

    ;
  } else {
    if (window.innerWidth >= 768 && 1440 >= window.innerWidth) {
      repairs.classList.remove('section-middle');
      wrapper2.classList.remove('wrapper-middle');
      showAll2.classList.remove('hide');
      showAll2.classList.add('show');
    } else {
      repairs.classList.remove('section-desk');
      wrapper2.classList.remove('wrapper-desk');
      showAll2.classList.remove('hide');
      showAll2.classList.add('show');
    }

    ;
  }

  ;
};

window.addEventListener("resize", function () {
  window.location.reload();
});

showAll3.onclick = function () {
  var services = document.querySelector('.services');

  if (showAll3.classList.contains('show-services')) {
    services.classList.add('service-show');
    showAll3.classList.remove('show-services');
    showAll3.classList.add('hide');
  } else {
    services.classList.remove('service-show');
    showAll3.classList.remove('hide');
    showAll3.classList.add('show-services');
  }

  ;
};

window.addEventListener("resize", function () {
  window.location.reload();
});
var modalBtns = document.querySelectorAll('._modal-open');
var modals = document.querySelectorAll('._modal');
var body = document.body;

function openModal(elem) {
  elem.classList.add('_active');
  body.classList.add('_locked');
}

function closeModal(e) {
  if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
    e.target.closest('._modal').classList.remove('_active');
    body.classList.remove('_locked');
  }
}

modalBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    var data = e.target.dataset.modalOpen;
    modals.forEach(function (modal) {
      if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open').dataset.modalOpen) {
        openModal(modal);
      }
    });
  });
});
modals.forEach(function (modal) {
  modal.addEventListener('click', function (e) {
    return closeModal(e);
  });
});
window.addEventListener('keydown', function (e) {
  modals.forEach(function (modal) {
    if (e.key === "Escape" && modal.classList.contains('_active')) {
      modal.classList.remove('_active');
      body.classList.remove('_locked');
    }
  });
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/btn-close.svg */ "./img/btn-close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/company.png */ "./img/company.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1.svg */ "./img/cat1.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy.svg */ "./img/cat1 copy.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 2.svg */ "./img/cat1 copy 2.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 9.svg */ "./img/cat1 copy 9.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 7.svg */ "./img/cat1 copy 7.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 8.svg */ "./img/cat1 copy 8.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 3.svg */ "./img/cat1 copy 3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/cat1 copy 10.svg */ "./img/cat1 copy 10.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/rep1.svg */ "./img/rep1.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/rep2.svg */ "./img/rep2.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/rep3.svg */ "./img/rep3.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/rep4.svg */ "./img/rep4.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/more.svg */ "./img/more.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\n  <title>new site</title>\n</head>\n<body>\n  \n  <header class=\"header-main\">\n    <div class=\"header-container\">\n        <nav class=\"menu-body\">\n          <div class=\"header-list\">\n\n              <div class=\"header-list-left\">\n                <div class=\"header_item\"><button class=\"btn__burger main__btn\" type=\"button\"></button></div>\n                <div class=\"header_item\"><button class=\"btn__logo logo__btn\" type=\"button\"></button></div>\n              </div>\n\n              <div class=\"header-list-center\">\n                <div class=\"header_item\"><button class=\"btn__call main__btn _modal-open\" data-modal-open=\"modal-1\" type=\"button\"></button></div>\n                <div class=\"header_item\"><button class=\"btn__chat main__btn _modal-open\" data-modal-open=\"modal-2\" type=\"button\"></button></div>\n                <div class=\"header_item\"><button class=\"btn__profile main__btn\" type=\"button\"></button></div>\n              </div>\n\n              <div class=\"header-list-right\">\n                <div class=\"header_item\"><button class=\"btn__repair main__btn\" type=\"button\"></button></div>\n                <div class=\"header_item\"><button class=\"btn__checkstatus main__btn\" type=\"button\"></button></div>\n              </div>\n          </div>  \n        </nav>\n    </div>\n  </header>\n    \n<main class=\"main\">\n    \n      <section class=\"section\">\n        <section class=\"section-wrapper\">\n        <header class=\"section-header\">\n            <div class=\"section-header__left\">\n                <button class=\"btn__burger main__btn\" type=\"button\"></button>\n                <button class=\"btn__logo-menu logo__btn\" type=\"button\"></button>\n            </div>\n                \n            <div class=\"section-header__right\">\n                <button class=\"btn__search-menu main__btn\" type=\"button\"></button>\n            </div>       \n        </header>\n    \n        <nav>\n            <ul class=\"section-list\">\n                <li><a href=\"#!\">Ремонт техники</a></li>\n                <li><a href=\"#!\">Услуги и сервисы</a></li>\n                <li><a href=\"#!\">Корпоративным клиентам</a></li>\n                <li><a href=\"#!\">Продавцам техники</a></li>\n                <li><a href=\"#!\">Партнёрам</a></li>\n                <li><a href=\"#!\">Производителям</a></li>\n                <li><a href=\"#!\">Наши сервисные центры</a></li>\n                <li><a href=\"#!\">Контакты</a></li>\n            </ul>\n        </nav>\n    \n        <footer class=\"footer-main__menu\">\n            <ul class=\"section__bottom\">\n                <li><button class=\"btn__call main__btn _modal-open\" data-modal-open=\"modal-1\" type=\"button\"></button></li>\n                <li><button class=\"btn__chat main__btn _modal-open\" data-modal-open=\"modal-2\" type=\"button\"></button></li>\n                <li><button class=\"btn__profile main__btn\" type=\"button\"></button></li>\n            </ul>\n    \n            <div class=\"mail\">\n                <a href=\"mailto:mail@cps.com\">mail@cps.com</a>\n            </div>\n    \n            <div class=\"tel\">\n                8 800 890 8900\n            </div>\n    \n            <div class=\"lang\">\n                <div class=\"lang_ru\"><a href=\"#!\">RU</a></div>\n                <div class=\"lang_en\"><a href=\"#!\">EN</a></div>\n                <div class=\"lang_ch\"><a href=\"#!\">CH</a></div>\n            </div>\n        </footer>\n    </section>\n    </section>\n\n    <section class=\"modal-callMe\">\n      <div class=\"_modal\" data-modal=\"modal-1\">\n        <div class=\"modal-bg\">\n          <div class=\"modal-body\">\n            <div class=\"modal-close\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"></div>\n            <div class=\"modal-content modal-callback\">\n              <header class=\"modal-call-header\">\n                <!--<button class=\"btn-close main__btn modal-close\"></button>-->\n                <h2 class=\"modal-call-title\">Заказать звонок</h2>\n              </header>\n      \n      \n              <form name=\"form\" method=\"post\">\n                <input type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required pattern=\"+[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}\">\n                <br>\n                <p>\n                  Нажимая “отправить”, вы даете согласие на\n                  <a href=\"#\">обработку персональных данных</a> и соглашаетесь с\n                  нашей <a href=\"#\">политикой конфиденциальности.</a>\n                </p>\n                <button class=\"btn-send\"></button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"modal-message\">\n      <div class=\"_modal\" data-modal=\"modal-2\">\n        <div class=\"modal-bg\">\n          <div class=\"modal-body\">\n            <div class=\"modal-close\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"></div>\n            <div class=\"modal-content modal-callback\">\n              <header class=\"modal-call-header\">\n                <h2 class=\"modal-call-title\">Обратная связь</h2>\n              </header>\n      \n      \n              <form name=\"form\" method=\"post\">\n                <input type=\"text\" name=\"name\" placeholder=\"Имя\" required>\n                <br>\n                <input type=\"tel\" name=\"phone\" placeholder=\"Телефон\" required pattern=\"+[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}\">\n                <br>\n                <input type=\"email\" name=\"email\" placeholder=\"Электронная почта\" required>\n                <br>\n                <textarea cols=\"32\" name=\"message\" rows=\"5\" placeholder=\"Сообщение\" required></textarea>\n                <p>\n                  Нажимая “отправить”, вы даете согласие на\n                  <a href=\"#\">обработку персональных данных</a> и соглашаетесь с\n                  нашей <a href=\"#\">политикой конфиденциальности.</a>\n                </p>\n                <button class=\"btn-send\"></button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    \n    <section class=\"main-wrapper\">\n      <section class=\"services\">\n        <div class=\"content__block1\">\n\n            <div class=\"main__title\">\n                \n                <div class=\"main__title_text\"><a href=\"#!\"><h1>Услуги и сервисы</h1></a>\n\n                    <div class=\"main__title_text_menu\">\n                        <div class=\"main__title_text_menu_menu1\">Оставить заявку</div>\n                        <div class=\"main__title_text_menu_menu2\"><button class=\"btn__repair main__btn\" type=\"button\"></button></div>\n                        <div class=\"main__title_text_menu_menu3\">Статус ремонта</div>\n                        <div class=\"main__title_text_menu_menu4\"><button class=\"btn__checkstatus main__btn\" type=\"button\"></button>\n                        </div>  \n                    </div>\n                </div>\n            </div>      \n            \n            <section class=\"main__menu\">\n                 <nav class=\"main__menu_list\">\n                    <a class=\"main__menu_order\" href=\"#\">Ремонтируемые устройства</a>\n                    <a class=\"main__menu_order\" href=\"#\">Дополнительные услуги</a>\n                    <a class=\"main__menu_order\" href=\"#\">Цены и услуги</a>\n                    <a class=\"main__menu_order\" href=\"#\">Адреса сервисных центров</a>\n                    <a class=\"main__menu_order\" href=\"#\">Специальные цены</a>\n                    <a class=\"main__menu_order\" href=\"#\">Отзывы</a>    \n                </nav>\n            </section>\n        </div>\n    \n        <div class=\"content__block2\">\n            \n                <div class=\"main__text\">    \n                    <p class=\"paragraf1\">Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.</p>\n                    <p class=\"paragraf3\"><br></p>\n                    <p class=\"paragraf2\">Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>\n                    <p class=\"paragraf4\"><br></p>\n                    <p class=\"paragraf5\">Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>\n                    <p class=\"paragraf6\"><br></p>\n                    <div><button id=\"showAll3\" class=\"btn-next show-services\" value=\"read next\" data-caption=\"Показать все\"></button></div>\n                </div>\n\n                \n\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Фото офиса компании\" class=\"main_image\">\n        </div>\n      </section>\n\n      <section class=\"section-cards wrapper\">\n        <header class=\"header-cards\">\n            <h1 class=\"header-title\">Ремонт техники различных брендов</h1>\n        </header>\n\n        <div class=\"swiper-container swiper\">\n            <ul class=\"cards swiper-wrapper\">\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Lenovo\"><a href=\"#!\"></a></li>\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Samsung\"><a href=\"#!\"></a></li>\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Apple\"><a href=\"#!\"></a></li>\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Acer\"><a href=\"#!\"></a></li>\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Bosch\"><a href=\"#!\"></a></li>\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"HP\"><a href=\"#!\"></a></li>\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"ViewSonic\"><a href=\"#!\"></a></li>\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Sony\"><a href=\"#!\"></a></li>\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Lenovo\"><a href=\"#!\"></a></li>\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Samsung\"><a href=\"#!\"></a></li>\n                <li class=\"card swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Apple\"><a href=\"#!\"></a></li>\n            </ul>\n            <div class=\"swiper-pagination\"></div>\n            <button id=\"showAll\" class=\"btn-next show\" value=\"read next\" data-caption=\"Показать все\"></button>\n        </div>\n      </section>\n\n      <section class=\"section-repair wrapper2\">\n        <header class=\"header-repair\">\n            <h1 class=\"header-repair-title\">Ремонт различных видов техники</h1>\n        </header>\n\n        <div class=\"swiper-container swiper\">\n            <ul class=\"repairs swiper-wrapper\">\n                <li class=\"repair swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Ремонт ноутбуков\"><a href=\"#!\"></a></li>\n                <li class=\"repair swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Ремонт планшетов\"><a href=\"#!\"></a></li>\n                <li class=\"repair swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Ремонт ПК\"><a href=\"#!\"></a></li>\n                <li class=\"repair swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Ремонт мониторов\"><a href=\"#!\"></a></li>\n                <li class=\"repair swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Ремонт ноутбуков\"><a href=\"#!\"></a></li>\n                <li class=\"repair swiper-slide\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Ремонт планшетов\"><a href=\"#!\"></a></li>\n            </ul>\n            <div class=\"swiper-pagination\"></div>\n            <button id=\"showAll2\" class=\"btn-next show\" value=\"read next\" data-caption=\"Показать все\"></button>\n        </div>\n      </section>\n\n      <section class=\"section-prices wrapper3\">\n        <header class=\"header-prices\">\n            <h1 class=\"header-title\">Цены на услуги</h1>\n        </header>\n\n        <div class=\"swiper-container swiper\">\n            <ul class=\"prices swiper-wrapper\">\n                <li class=\"price swiper-slide\">\n                  <p class=\"turn-add\">Ремонтные услуги</p>\n                  <p class=\"turn\">Диагностика</p>\n                  <p class=\"cost-add\">Цена</p>\n                  <p class=\"cost\">Бесплатно</p>\n                  <p class=\"time-add\">Срок</p>\n                  <p class=\"time\">30-120 мин</p>\n                  <button class=\"btn-price\"></button>\n                </li>\n                <li class=\"price swiper-slide\">\n                  <p class=\"turn-add\">Ремонтные услуги</p>\n                  <p class=\"turn\">Замена дисплея</p>\n                  <p class=\"cost-add\">Цена</p>\n                  <p class=\"cost\">1000 &#8381;</p>\n                  <p class=\"time-add\">Срок</p>\n                  <p class=\"time\">30-120 мин</p>\n                  <button class=\"btn-price\"></button>\n                </li>\n                <li class=\"price swiper-slide\">\n                  <p class=\"turn-add\">Ремонтные услуги</p>\n                  <p class=\"turn\">Замена полифонического динамика</p>\n                  <p class=\"cost-add\">Цена</p>\n                  <p class=\"cost\">1000 &#8381;</p>\n                  <p class=\"time-add\">Срок</p>\n                  <p class=\"time\">30-120 мин</p>\n                  <button class=\"btn-price\"></button>\n                </li>\n                <li class=\"price swiper-slide\">\n                  <p class=\"turn-add\">Ремонтные услуги</p>\n                  <p class=\"turn\">Тестирование с выдачей технического заключения</p>\n                  <p class=\"cost-add\">Цена</p>\n                  <p class=\"cost\">1000 &#8381;</p>\n                  <p class=\"time-add\">Срок</p>\n                  <p class=\"time\">30-120 мин</p>\n                  <button class=\"btn-price\"></button>\n                </li>\n                <li class=\"price swiper-slide\">\n                  <p class=\"turn-add\">Ремонтные услуги</p>\n                  <p class=\"turn\">Замена программного обеспечения</p>\n                  <p class=\"cost-add\">Цена</p>\n                  <p class=\"cost\">1000 &#8381;</p>\n                  <p class=\"time-add\">Срок</p>\n                  <p class=\"time\">30-120 мин</p>\n                  <button class=\"btn-price\"></button>\n                </li>\n            </ul>\n            <div class=\"swiper-pagination\"></div>\n        </div>\n\n        <p class=\"VAT\">\n          Все цены указаны с учетом НДС. Стоимость ремонта указана на\n          единичную услугу. Для получения коммерческого предложения на\n          постоянное обслуживание, оставьте заявку.\n        </p>\n\n        <a href=\"#\">\n          <p class=\"offer\">Получить коммерческое предложение <img class=\"imgMore\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\"></p> \n        </a>\n      </section>\n\n      <footer class=\"footer-sign\">\n        <p class=\"footer__text\">© 2019 CPS Разработано командой Apesong</p>\n        <p class=\"footer__text\">Политика конфиденциальности</p>\n        <p class=\"footer__text\">Информация, размещенная на данной странице, не является публичной офертой</p>\n      </footer>\n    </section>\n</main>\n</body>\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/btn-close.svg":
/*!***************************!*\
  !*** ./img/btn-close.svg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/btn-close.svg";

/***/ }),

/***/ "./img/cat1 copy 10.svg":
/*!******************************!*\
  !*** ./img/cat1 copy 10.svg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat1 copy 10.svg";

/***/ }),

/***/ "./img/cat1 copy 2.svg":
/*!*****************************!*\
  !*** ./img/cat1 copy 2.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat1 copy 2.svg";

/***/ }),

/***/ "./img/cat1 copy 3.svg":
/*!*****************************!*\
  !*** ./img/cat1 copy 3.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat1 copy 3.svg";

/***/ }),

/***/ "./img/cat1 copy 7.svg":
/*!*****************************!*\
  !*** ./img/cat1 copy 7.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat1 copy 7.svg";

/***/ }),

/***/ "./img/cat1 copy 8.svg":
/*!*****************************!*\
  !*** ./img/cat1 copy 8.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat1 copy 8.svg";

/***/ }),

/***/ "./img/cat1 copy 9.svg":
/*!*****************************!*\
  !*** ./img/cat1 copy 9.svg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat1 copy 9.svg";

/***/ }),

/***/ "./img/cat1 copy.svg":
/*!***************************!*\
  !*** ./img/cat1 copy.svg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat1 copy.svg";

/***/ }),

/***/ "./img/cat1.svg":
/*!**********************!*\
  !*** ./img/cat1.svg ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cat1.svg";

/***/ }),

/***/ "./img/company.png":
/*!*************************!*\
  !*** ./img/company.png ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/company.png";

/***/ }),

/***/ "./img/more.svg":
/*!**********************!*\
  !*** ./img/more.svg ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/more.svg";

/***/ }),

/***/ "./img/rep1.svg":
/*!**********************!*\
  !*** ./img/rep1.svg ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rep1.svg";

/***/ }),

/***/ "./img/rep2.svg":
/*!**********************!*\
  !*** ./img/rep2.svg ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rep2.svg";

/***/ }),

/***/ "./img/rep3.svg":
/*!**********************!*\
  !*** ./img/rep3.svg ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rep3.svg";

/***/ }),

/***/ "./img/rep4.svg":
/*!**********************!*\
  !*** ./img/rep4.svg ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rep4.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-ca966d"], function() { return __webpack_require__("./js/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
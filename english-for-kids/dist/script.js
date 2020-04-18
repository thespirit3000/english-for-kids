/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_PrintUi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/PrintUi */ "./src/js/PrintUi.js");
/* harmony import */ var _js_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/interface */ "./src/js/interface.js");
/* harmony import */ var _js_eventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/eventHandler */ "./src/js/eventHandler.js");
/* harmony import */ var _js_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/render */ "./src/js/render.js");





var initialize = function initialize() {
  var header = new _js_PrintUi__WEBPACK_IMPORTED_MODULE_0__["default"](_js_interface__WEBPACK_IMPORTED_MODULE_1__["default"].header);
  var footer = new _js_PrintUi__WEBPACK_IMPORTED_MODULE_0__["default"](_js_interface__WEBPACK_IMPORTED_MODULE_1__["default"].footer);
  var main = new _js_PrintUi__WEBPACK_IMPORTED_MODULE_0__["default"](_js_interface__WEBPACK_IMPORTED_MODULE_1__["default"].main);
  var menu = new _js_PrintUi__WEBPACK_IMPORTED_MODULE_0__["default"](_js_interface__WEBPACK_IMPORTED_MODULE_1__["default"].side_panel);
  header.printHTML(document.body);
  main.printHTML(document.body);
  footer.printHTML(document.body);
  menu.printHTML(document.body);
  Object(_js_render__WEBPACK_IMPORTED_MODULE_3__["renderCategoryMenu"])();
  Object(_js_render__WEBPACK_IMPORTED_MODULE_3__["renderSideMenu"])();
  Object(_js_eventHandler__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

var unloadWindow = function unloadWindow() {};

window.onload = initialize;
window.onbeforeunload = unloadWindow;

/***/ }),

/***/ "./src/js/Card.js":
/*!************************!*\
  !*** ./src/js/Card.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(dataObj, gameMode) {
    _classCallCheck(this, Card);

    this.word = dataObj.word;
    this.translation = dataObj.translation;
    this.imgUrl = dataObj.image;
    this.audioSrc = dataObj.audioSrc;
    this.gameMode = gameMode;
  }

  _createClass(Card, [{
    key: "renderGameCard",
    value: function renderGameCard() {
      return "\n    <div class=\"flip-card active_card\">\n    <div class=\"flip-card-inner\">\n      <div id=\"".concat(this.word, "\" class=\"flip-card-front\">\n        <div class=\"flip-card-overlay\">\n          <audio>\n            <source src=\"./assets/").concat(this.audioSrc, "\" type=\"audio/mpeg\" class=audio>\n        </audio>\n        </div>\n          <img src=\"./assets/").concat(this.imgUrl, "\" alt=\"Imagine image\" class='card-img data-card imgGame'\">\n      </div>\n      </div>\n    ");
    }
  }, {
    key: "renderLearnCard",
    value: function renderLearnCard() {
      return "\n    <div class=\"flip-card\">\n      <div class=\"flip-card-inner\">\n        <div id=\"".concat(this.word, "\" class=\"flip-card-front\">\n          <div class=\"flip-card-overlay\">\n            <audio>\n              <source src=\"./assets/").concat(this.audioSrc, "\" type=\"audio/mpeg\" class=audio>\n          </audio>\n          </div>\n            <img src=\"./assets/").concat(this.imgUrl, "\" alt=\"Imagine image category\" class='card-img data-card'\">\n          <div class=\"word-container\">\n            <h4 class='data-card'><b>").concat(this.word, "</b></h4>\n          </div>\n          <button class=\"btn btn-rotate\"><i class=\"fa fa-refresh rotate-card\"></i></button>\n        </div>\n        <div class=\"flip-card-back\">\n          <img src=\"./assets/").concat(this.imgUrl, "\" alt=\"Imagine image category\" class='card-img data-card'\">\n          <div class=\"word-container data-card\">\n            <h4 class='data-card'><b>").concat(this.translation, "</b></h4>\n          </div>\n        </div>\n      </div>\n    </div>  \n  ");
    }
  }, {
    key: "renderCard",
    value: function renderCard() {
      return this.gameMode ? this.renderGameCard() : this.renderLearnCard();
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/js/Category.js":
/*!****************************!*\
  !*** ./src/js/Category.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Category = /*#__PURE__*/function () {
  function Category(categoryName, imgUrl, categoryNum) {
    _classCallCheck(this, Category);

    this.categoryName = categoryName;
    this.imgUrl = imgUrl;
    this.categoryNum = categoryNum;
  }

  _createClass(Category, [{
    key: "renderMenu",
    value: function renderMenu() {
      return "\n    <div id=\"".concat(this.categoryNum, "\" class=\"sidemenu-item menu-item item").concat(this.categoryNum, "\">").concat(this.categoryName, "</div>\n    ");
    }
  }, {
    key: "renderCard",
    value: function renderCard() {
      return "\n        <div id=\"".concat(this.categoryNum, "\" class=\"card data-category\">\n        <img src=\"").concat(this.imgUrl, "\" alt=\"Imagine image category\" class='card-img data-category'\">\n        <div class=\"container data-category\">\n          <h4 class='data-category'><b>").concat(this.categoryName, "</b></h4>\n        </div>\n      </div>\n        ");
    }
  }]);

  return Category;
}();



/***/ }),

/***/ "./src/js/PrintUi.js":
/*!***************************!*\
  !*** ./src/js/PrintUi.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrintUi; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PrintUi = /*#__PURE__*/function () {
  function PrintUi(template) {
    _classCallCheck(this, PrintUi);

    this.template = template;
  }

  _createClass(PrintUi, [{
    key: "printHTML",
    value: function printHTML(node) {
      node.insertAdjacentHTML('beforeend', this.template);
    }
  }]);

  return PrintUi;
}();



/***/ }),

/***/ "./src/js/data-array.js":
/*!******************************!*\
  !*** ./src/js/data-array.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cards = [['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Toys', 'Food'], [{
  word: 'cry',
  translation: 'плакать',
  image: 'img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: 'img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: 'img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: 'img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: 'img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: 'img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: 'img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: 'img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: 'img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: 'img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: 'img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: 'img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: 'img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: 'img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: 'img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: 'img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: 'img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: 'img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: 'img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: 'img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: 'img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: 'img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: 'img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: 'img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: 'img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: 'img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: 'img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: 'img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: 'img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: 'img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: 'img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: 'img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], [{
  word: 'skirt',
  translation: 'юбка',
  image: 'img/skirt.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: 'img/pants.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: 'img/blouse.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: 'img/dress.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: 'img/boot.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: 'img/shirt.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: 'img/coat.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: 'img/shoe.jpg',
  audioSrc: 'audio/shoe.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: 'img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: 'img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: 'img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: 'img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: 'img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: 'img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: 'img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: 'img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: 'img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: 'img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: 'img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: 'img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: 'img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: 'img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: 'img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: 'img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: 'img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: 'img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: 'img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: 'img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: 'img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: 'img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: 'img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: 'img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}]];
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/eventHandler.js":
/*!********************************!*\
  !*** ./src/js/eventHandler.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eventHandler; });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/js/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/js/state.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");




var handleClick = function handleClick(event) {
  if (event.target.classList.contains('open_menu')) {
    var menuElement = document.querySelector('.sidepanel');
    menuElement.setAttribute('style', 'width: 300px');
    var active = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["elementBySelector"])(document, '.active');
    var sideMenu = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["elementBySelector"])(document, ".item".concat(_state__WEBPACK_IMPORTED_MODULE_1__["default"].activeCategory));
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["removeActive"])(active, 'active');
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setActive"])(sideMenu, 'active');
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["stopGame"])();
  }

  if (event.target.classList.contains('close_menu')) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["closeMenu"])();
  }

  if (event.target.classList.contains('data-category')) {
    Object(_render__WEBPACK_IMPORTED_MODULE_0__["renderLearnCards"])(event.target.parentElement.innerText);
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].activeCategory = event.target.parentElement.id;

    var _active = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["elementBySelector"])(document, '.active');

    var _sideMenu = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["elementBySelector"])(document, ".item".concat(_state__WEBPACK_IMPORTED_MODULE_1__["default"].activeCategory));

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["removeActive"])(_active, 'active');
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setActive"])(_sideMenu, 'active');
  }

  if (event.target.classList.contains('category')) {
    Object(_render__WEBPACK_IMPORTED_MODULE_0__["renderCategoryMenu"])();
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].activeCategory = event.target.id;

    var _active2 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["elementBySelector"])(document, '.active');

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["removeActive"])(_active2, 'active');
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setActive"])(event.target, 'active');
  }

  if (event.target.classList.contains('menu-item')) {
    Object(_render__WEBPACK_IMPORTED_MODULE_0__["renderLearnCards"])(event.target.innerText);
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].activeCategory = event.target.id;

    var _active3 = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["elementBySelector"])(document, '.active');

    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["removeActive"])(_active3, 'active');
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setActive"])(event.target, 'active');
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["closeMenu"])();
  }

  if (event.target.classList.contains('sidemenu-item')) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["closeMenu"])();
  }

  if (event.target.classList.contains('flip-card-overlay')) {
    var clickedCard = event.target.parentElement;

    if (!_state__WEBPACK_IMPORTED_MODULE_1__["default"].game) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__["playAudio"])(clickedCard);
    }

    if (_state__WEBPACK_IMPORTED_MODULE_1__["default"].gameStarted) {
      if (_state__WEBPACK_IMPORTED_MODULE_1__["default"].currentWord === event.path[3]) {
        event.path[3].classList.add('checked');
        event.path[3].classList.remove('active_card');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["nextCard"])();
      }
    }
  }

  if (event.target.classList.contains('rotate-card')) {
    var rotatingCard = event.path[4];
    rotatingCard.classList.add('rotate');
  }

  if (event.target.classList.contains('game_btn')) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["startGame"])();
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["hideButton"])('.game_btn');
  }

  if (event.target.classList.contains('repeat_btn')) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["playAudio"])(_state__WEBPACK_IMPORTED_MODULE_1__["default"].currentWord);
  }
};

var handleMouseOver = function handleMouseOver(event) {
  if (event.target.classList.contains('data-card')) {
    var rotateRemove = document.querySelector('.rotate');
    rotateRemove.classList.remove('rotate');
  }
};

var handleInput = function handleInput(event) {
  if (event.target.classList.contains('switcher')) {
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].toggleGameState();

    if (_state__WEBPACK_IMPORTED_MODULE_1__["default"].activeCategory !== 'main') {
      if (_state__WEBPACK_IMPORTED_MODULE_1__["default"].game) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["showButton"])('.game_btn');
      } else {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["hideButton"])('.game_btn');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["stopGame"])();
      }

      Object(_render__WEBPACK_IMPORTED_MODULE_0__["renderLearnCardsFromState"])(_state__WEBPACK_IMPORTED_MODULE_1__["default"].activeCategory);
    }
  }
};

var eventHandler = function eventHandler() {
  document.addEventListener('input', handleInput);
  document.addEventListener('click', handleClick);
  document.addEventListener('mouseout', handleMouseOver);
};



/***/ }),

/***/ "./src/js/interface.js":
/*!*****************************!*\
  !*** ./src/js/interface.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  header: "\n    <div class=\"header_section\">\n      <div class='wrapper'>\n        <div class='header'>\n          <button class=\"btn menu_btn open_menu\"><i class=\"fa fa-bars open_menu\"></i></button>\n          <button class=\"btn game_btn hidden_opacity\">Start game</i></button>\n          <button class=\"btn repeat_btn hidden_opacity\"><i class=\"fa fa-refresh rotate-card\"></i></i></button>\n          <label class=\"switch\">\n          <input class=\"switcher\" type=\"checkbox\">\n          <span class=\"slider round\">\n          <span class=\"on\">Game</span>\n          </span>\n          </label>\n        </div>\n      </div>\n    </div>\n  ",
  side_panel: "<div id=\"mainMenu\" class=\"sidepanel\">\n  <button class=\"btn btn_close close_menu\"><i class=\"fa fa-close close_menu\"></i></button>\n  <div class=\"sidemenu-item category active itemmain\">Main menu</div>\n  </div>",
  main: "\n    <div class=\"main_section\">\n      <div class=\"wrapper\">\n      <div class=\"main main-window\">\n      </div>\n      </div> \n    </div> \n  ",
  footer: "\n    <section class=\"footer_section\">\n      <div class='wrapper'>\n        <div class=\"footer\">\n          <a href=\"mailto:thespirit3000@gmail.com\">created by Dzianis Bogdan</>\n        </div>\n      </div>  \n    </section>\n  "
});

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/*! exports provided: renderCategoryMenu, renderSideMenu, renderLearnCards, renderLearnCardsFromState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCategoryMenu", function() { return renderCategoryMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSideMenu", function() { return renderSideMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLearnCards", function() { return renderLearnCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLearnCardsFromState", function() { return renderLearnCardsFromState; });
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category */ "./src/js/Category.js");
/* harmony import */ var _data_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-array */ "./src/js/data-array.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./src/js/Card.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ "./src/js/state.js");





var cleanMain = function cleanMain() {
  var main = document.querySelector('.main-window');
  main.innerHTML = '';
};

var renderCategoryMenu = function renderCategoryMenu() {
  cleanMain();
  _data_array__WEBPACK_IMPORTED_MODULE_1__["default"][0].forEach(function (element) {
    var mainCategory = document.querySelector('.main-window');
    var indexOfElement = _data_array__WEBPACK_IMPORTED_MODULE_1__["default"][0].indexOf(element) + 1;
    var imgUrl = "./assets/".concat(_data_array__WEBPACK_IMPORTED_MODULE_1__["default"][indexOfElement][3].image);
    var category = new _Category__WEBPACK_IMPORTED_MODULE_0__["default"](element, imgUrl, _data_array__WEBPACK_IMPORTED_MODULE_1__["default"][0].indexOf(element));
    mainCategory.insertAdjacentHTML('beforeend', category.renderCard());
  });
};
var renderSideMenu = function renderSideMenu() {
  var menu = document.querySelector('.sidepanel');
  _data_array__WEBPACK_IMPORTED_MODULE_1__["default"][0].forEach(function (element) {
    var category = new _Category__WEBPACK_IMPORTED_MODULE_0__["default"](element, '', _data_array__WEBPACK_IMPORTED_MODULE_1__["default"][0].indexOf(element));
    menu.insertAdjacentHTML('beforeend', category.renderMenu());
  });
};
var renderLearnCards = function renderLearnCards(target) {
  cleanMain();
  var main = document.querySelector('.main-window');
  var categoryIndex = _data_array__WEBPACK_IMPORTED_MODULE_1__["default"][0].indexOf(target) + 1;
  _data_array__WEBPACK_IMPORTED_MODULE_1__["default"][categoryIndex].forEach(function (element) {
    var item = new _Card__WEBPACK_IMPORTED_MODULE_2__["default"](element, _state__WEBPACK_IMPORTED_MODULE_3__["default"].game);
    main.insertAdjacentHTML('beforeend', item.renderCard());
  });
};
var renderLearnCardsFromState = function renderLearnCardsFromState(stateActiveCategory) {
  var categoryIndex = _data_array__WEBPACK_IMPORTED_MODULE_1__["default"][0][+stateActiveCategory];
  renderLearnCards(categoryIndex);
};

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var state = {
  activeCategory: 'main',
  game: false,
  gameStarted: false,
  gameArray: [],
  currentWord: '',
  currentIndex: '0',
  toggleStarted: function toggleStarted() {
    this.gameStarted = !this.gameStarted;
  },
  toggleGameState: function toggleGameState() {
    this.game = !this.game;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (state);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: elementBySelector, setActive, removeActive, playAudio, closeMenu, showButton, hideButton, startGame, nextCard, stopGame, removeWhiteSpaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementBySelector", function() { return elementBySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActive", function() { return setActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeActive", function() { return removeActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAudio", function() { return playAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeMenu", function() { return closeMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showButton", function() { return showButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideButton", function() { return hideButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextCard", function() { return nextCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopGame", function() { return stopGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWhiteSpaces", function() { return removeWhiteSpaces; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/js/state.js");

var elementBySelector = function elementBySelector(element, selector) {
  return element.querySelector(selector);
};
var setActive = function setActive(element, activeSelectorClass) {
  element.classList.add(activeSelectorClass);
};
var removeActive = function removeActive(element, activeSelectorClass) {
  element.classList.remove(activeSelectorClass);
};
var playAudio = function playAudio(element) {
  var toPlay = element.querySelector('audio');
  toPlay.play();
};
var closeMenu = function closeMenu() {
  var menuElement = document.querySelector('.sidepanel');
  menuElement.setAttribute('style', 'width: 0px');
};
var showButton = function showButton(selector) {
  var buttonToShow = document.querySelector(selector);
  buttonToShow.classList.remove('hidden_opacity');
};
var hideButton = function hideButton(selector) {
  var buttonToHide = document.querySelector(selector);
  buttonToHide.classList.add('hidden_opacity');
};

var activeArray = function activeArray() {
  return document.querySelectorAll('.active_card');
};

var startGame = function startGame() {
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].toggleStarted();
  showButton('.repeat_btn');
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].gameArray = activeArray();
  var length = _state__WEBPACK_IMPORTED_MODULE_0__["default"].gameArray.length;
  var index = Math.floor(Math.random() * length);
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].currentIndex = index;
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].currentWord = _state__WEBPACK_IMPORTED_MODULE_0__["default"].gameArray[index];
  console.log(_state__WEBPACK_IMPORTED_MODULE_0__["default"].gameArray);
  playAudio(_state__WEBPACK_IMPORTED_MODULE_0__["default"].currentWord);
};
var nextCard = function nextCard() {
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].gameArray = activeArray();
  var length = _state__WEBPACK_IMPORTED_MODULE_0__["default"].gameArray.length;
  var index = Math.floor(Math.random() * length);
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].currentIndex = index;
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].currentWord = _state__WEBPACK_IMPORTED_MODULE_0__["default"].gameArray[index];
  console.log(_state__WEBPACK_IMPORTED_MODULE_0__["default"].gameArray);
  playAudio(_state__WEBPACK_IMPORTED_MODULE_0__["default"].currentWord);
};
var stopGame = function stopGame() {
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].toggleStarted();
  hideButton('.repeat_btn');
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].gameArray = [];
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].currentWord = '';

  if (_state__WEBPACK_IMPORTED_MODULE_0__["default"].game) {
    showButton('.game_btn');
  }
};
var removeWhiteSpaces = function removeWhiteSpaces(string) {
  return string.split(/\s/).join('');
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map
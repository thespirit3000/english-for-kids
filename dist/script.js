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




var initialize = function initialize() {
  var header = new _js_PrintUi__WEBPACK_IMPORTED_MODULE_0__["default"](_js_interface__WEBPACK_IMPORTED_MODULE_1__["default"].header);
  var footer = new _js_PrintUi__WEBPACK_IMPORTED_MODULE_0__["default"](_js_interface__WEBPACK_IMPORTED_MODULE_1__["default"].footer);
  header.printHTML(document.body);
  footer.printHTML(document.body);
  Object(_js_eventHandler__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

var unloadWindow = function unloadWindow() {};

window.onload = initialize;
window.onbeforeunload = unloadWindow;

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

/***/ "./src/js/eventHandler.js":
/*!********************************!*\
  !*** ./src/js/eventHandler.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return eventHandler; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");


var handleClick = function handleClick(event) {
  return 1;
};

var handleInput = function handleInput(event) {
  if (event.target.classList.contains('switcher')) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target);
  }
};

var eventHandler = function eventHandler() {
  document.addEventListener('input', handleInput);
  document.addEventListener('click', handleClick);
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
  header: "\n    <section class=header_section>\n      <div class='wrapper'>\n        <div class='header'>\n          <button class=\"btn menu_btn\"><i class=\"fa fa-bars\"></i></button>\n          <label class=\"switch\">\n          <input class=\"switcher\" type=\"checkbox\">\n          <span class=\"slider round\"></span>\n          </label>\n        </div>\n      </div>\n    </section>\n                    ",
  footer: "\n    <section class=\"footer_section\">\n      <div class='wrapper'>\n        <div class=\"footer\">\n          <a href=\"mailto:thespirit3000@gmail.com\">created by Dzianis Bogdan</>\n        </div>\n      </div>  \n    </section>\n  "
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gameModeSet; });
var gameModeSet = function gameModeSet(gameSwitcher) {
  if (gameSwitcher.checked === true) {
    console.log('game');
  } else {
    console.log('learn');
  }
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
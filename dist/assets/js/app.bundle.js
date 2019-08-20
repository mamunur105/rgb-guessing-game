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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/functions.js
function $(selector) {
  var elements;

  if (selector === 'document') {
    elements = [document];
  } else if (selector === 'window') {
    elements = [window];
  } else if (selector === 'body') {
    elements = document.body;
  } else {
    elements = document.querySelectorAll(selector);
  }

  return elements;
}
// CONCATENATED MODULE: ./src/js/custom.js

var _setup = {
  vars: {
    numberOfSquares: 6,
    colors: [],
    pickedColor: '',
    bodyBackgroundColor: '#242424',
    headerBackgroundColor: 'steelblue'
  },
  selectors: {
    squares: $('.square'),
    colorDisplay: $('h1 span'),
    message: $('#message'),
    h1: $('h1'),
    resetBtn: $('#reset'),
    modeBtn: $('#nav .mode')
  },
  modeButtons: function modeButtons() {
    var _this = this;

    for (var i = 0; i < this.selectors.modeBtn.length; i++) {
      this.selectors.modeBtn[i].addEventListener('click', function (event) {
        _this.selectors.modeBtn.forEach(function (btn) {
          btn.classList.remove('selected');
        });

        event.target.classList.add('selected');
        _this.vars.numberOfSquares = event.target.textContent === 'Easy' ? 3 : 6;
        app.reset();
      });
    }
  },
  resetButton: function resetButton() {
    this.selectors.resetBtn[0].addEventListener('click', function () {
      return app.reset();
    });
  }
};
var handlers = {
  success: function success(args) {
    _setup.selectors.message[0].textContent = 'Correct!';
    _setup.selectors.resetBtn[0].textContent = 'Play Again?';
    helpers.changeColor(args);
    _setup.selectors.h1[0].style.backgroundColor = args;
  },
  failure: function failure(args) {
    args.target.style.backgroundColor = _setup.vars.bodyBackgroundColor;
    args.target.style.boxShadow = 'none';
    _setup.selectors.message[0].textContent = 'Try Again!';
  },
  modeChecker: function modeChecker(args) {
    if (_setup.vars.colors[args]) {
      _setup.selectors.squares[args].style.display = 'block';
      _setup.selectors.squares[args].style.backgroundColor = _setup.vars.colors[args];
    } else {
      _setup.selectors.squares[args].style.display = 'none';
    }

    _setup.selectors.squares[args].classList.remove('disabled');
  }
};
var helpers = {
  generateRandomColors: function generateRandomColors(number) {
    var colors = [];

    for (var index = 0; index < number; index++) {
      colors.push(this.randomColor());
    }

    return colors;
  },
  randomColor: function randomColor() {
    var r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
    return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
  },
  pickColor: function pickColor() {
    var rand = Math.floor(Math.random() * _setup.vars.colors.length);
    return _setup.vars.colors[rand];
  },
  changeColor: function changeColor(color) {
    for (var i = 0; i < _setup.selectors.squares.length; i++) {
      _setup.selectors.squares[i].style.backgroundColor = color;

      _setup.selectors.squares[i].classList.add('disabled');
    }
  }
};
var app = {
  init: function init() {
    this.setup();
    this.actions();
    this.reset();
  },
  setup: function setup() {
    _setup.vars;

    _setup.modeButtons();

    _setup.resetButton();
  },
  actions: function actions() {
    for (var i = 0; i < _setup.selectors.squares.length; i++) {
      _setup.selectors.squares[i].style.backgroundColor = _setup.vars.colors[i];

      _setup.selectors.squares[i].addEventListener('click', function (event) {
        var clickedColor = event.target.style.backgroundColor;

        if (clickedColor === _setup.vars.pickedColor) {
          handlers.success(clickedColor);
        } else {
          handlers.failure(event);
        }
      });
    }
  },
  reset: function reset() {
    _setup.vars.colors = helpers.generateRandomColors(_setup.vars.numberOfSquares);
    _setup.vars.pickedColor = helpers.pickColor();
    _setup.selectors.colorDisplay[0].textContent = _setup.vars.pickedColor;
    _setup.selectors.message[0].textContent = '';
    _setup.selectors.resetBtn[0].textContent = 'New game';
    _setup.selectors.h1[0].style.backgroundColor = _setup.vars.headerBackgroundColor;

    for (var i = 0; i < _setup.selectors.squares.length; i++) {
      handlers.modeChecker(i);
    }
  }
}; // missing forEach on NodeList for IE11

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

app.init();

/***/ })
/******/ ]);
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

// CONCATENATED MODULE: ./src/js/lib/utils.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function abc(selector) {
  var elements;

  if (selector === 'document') {
    elements = [document];
  } else if (selector == 'window') {
    elements = [window];
  } else if (selector === 'body') {
    elements = document.body;
  } else {
    elements = [].slice.call(document.querySelectorAll(selector));
  }

  return elements;
}
var loop = function loop(arr, callback, method) {
  return [][method || 'forEach'].call(arr, callback);
};
var retrieve = function retrieve(property) {
  return function (object) {
    return object[property];
  };
};
function compose() {
  return [].reduce.call(arguments, function (f, g) {
    return function () {
      return g(f.apply(this, arguments));
    };
  });
}
function join(f, g) {
  return function () {
    return f.apply(this, arguments).concat(g.apply(this, arguments));
  };
}
var toArray = function toArray(nodelist) {
  return !nodelist.length || _typeof(nodelist) !== 'object' ? nodelist : [].slice.call(nodelist);
};
var query = function query(selector, element) {
  return toArray((element || document).querySelectorAll(selector));
};
var unique = function unique(array) {
  return array.filter(function (a, b) {
    return array.indexOf(a) === b;
  });
};
var flatten = function flatten(array) {
  return [].concat.apply([], array);
};
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState !== 'loading') {
        fn();
      }
    });
  }
}
// CONCATENATED MODULE: ./src/js/lib/Aurora.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Aurora_Aurora =
/*#__PURE__*/
function () {
  function Aurora(selector) {
    _classCallCheck(this, Aurora);

    this.el = typeof selector === 'string' ? query(selector) : [].concat(toArray(selector));
    this.first = this.el;
    this.length = this.el.length;
  }

  _createClass(Aurora, [{
    key: "get",
    value: function get(index) {
      return index === undefined ? this.el : this.el[index];
    }
  }, {
    key: "parent",
    value: function parent() {
      return this.map(retrieve('parentNode'));
    }
  }, {
    key: "next",
    value: function next() {
      return this.map(retrieve('nextElementSibling'));
    }
  }, {
    key: "previous",
    value: function previous() {
      return this.map(retrieve('previousElementSibling'));
    }
  }, {
    key: "children",
    value: function children() {
      return this.map(retrieve('children'));
    }
  }, {
    key: "parents",
    value: function parents() {
      return this.map(this.loop('parentNode'));
    }
  }, {
    key: "nextAll",
    value: function nextAll() {
      return this.map(this.loop('nextElementSibling'));
    }
  }, {
    key: "prevAll",
    value: function prevAll() {
      return this.map(this.loop('previousElementSibling'));
    }
  }, {
    key: "siblings",
    value: function siblings() {
      var prev = this.loop('previousElementSibling');
      var next = this.loop('nextElementSibling');
      return this.map(join(prev, next));
    }
  }, {
    key: "filter",
    value: function filter(selector) {
      var result = this.el.filter(function (x) {
        return query(selector, x.parentNode).indexOf(x) > -1;
      });
      return this._update(flatten(result));
    }
  }, {
    key: "each",
    value: function each(callback) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = toArray(this.el)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;
          callback.call(el);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return this;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      return this.each(function () {
        this.classList.add(className);
      });
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      return this.each(function () {
        this.classList.remove(className);
      });
    }
  }, {
    key: "hasClass",
    value: function hasClass(className) {
      return this.el[0].classList.contains(className);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(className) {
      return this.each(function () {
        this.classList.toggle(className);
      });
    }
  }, {
    key: "text",
    value: function text(content) {
      return this.each(function () {
        return this.textContent = content;
      });
    }
  }, {
    key: "html",
    value: function html(content) {
      return this.each(function () {
        return this.innerHTML = content;
      });
    }
  }, {
    key: "before",
    value: function before(content) {
      return this.each(function () {
        return this.insertAdjacentHTML('beforebegin', content);
      });
    }
  }, {
    key: "after",
    value: function after(content) {
      return this.each(function () {
        return this.insertAdjacentHTML('afterend', content);
      });
    }
  }, {
    key: "prepend",
    value: function prepend(content) {
      return this.each(function () {
        return this.insertAdjacentHTML('afterbegin', content);
      });
    }
  }, {
    key: "append",
    value: function append(content) {
      return this.each(function () {
        return this.insertAdjacentHTML('beforeend', content);
      });
    }
  }, {
    key: "val",
    value: function val(value) {
      if (value === undefined) {
        return this.el[0].value;
      }

      return this.el[0].value = value;
    }
  }, {
    key: "attr",
    value: function attr(name, value) {
      if (value === undefined) {
        return this.el[0].getAttribute(name);
      }

      return this.el[0].setAttribute(name, value);
    }
  }, {
    key: "data",
    value: function data(name, value) {
      if (value === undefined) {
        return this.el[0].dataset[name];
      }

      return this.el[0].dataset[name] = value;
    }
  }, {
    key: "css",
    value: function css(styles) {
      return this.each(function () {
        for (var property in styles) {
          this.style[property] = styles[property];
        }
      });
    }
  }, {
    key: "show",
    value: function show(css) {
      return this.each(function () {
        var styles = css || {
          display: 'block'
        };

        for (var property in styles) {
          return this.style[property] = styles[property];
        }
      });
    }
  }, {
    key: "hide",
    value: function hide(css) {
      return this.each(function () {
        var styles = css || {
          display: 'none'
        };

        for (var property in styles) {
          return this.style[property] = styles[property];
        }
      });
    }
  }, {
    key: "on",
    value: function on(eventName, selector, callback) {
      return this.each(function () {
        this.addEventListener(eventName, function (event) {
          var id = selector.el[0].id ? "#".concat(selector.el[0].id) : '',
              className = selector.el[0].className ? ".".concat(selector.el[0].className) : '',
              tagName = selector.el[0].tagName;

          if (event.target && event.target.matches(className || id || tagName)) {
            callback.call(this, event);
          }
        }, false);
        return this;
      });
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(duration, styles) {
      return this.each(function () {
        var _this = this;

        var opacity = getComputedStyle(this, null).opacity || 1,
            step = 25 / (duration || 300);

        var _loop = function _loop(property) {
          (function fade() {
            this.style.opacity = opacity;

            if ((opacity -= step) < -0.1) {
              this.style[property] = styles[property];
            } else {
              setTimeout(fade.bind(this), 25);
            }
          }).bind(_this)();
        };

        for (var property in styles) {
          _loop(property);
        }
      });
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(duration, styles) {
      return this.each(function () {
        var _this2 = this;

        var opacity = getComputedStyle(this, null).opacity || 0,
            step = 25 / (duration || 300);

        var _loop2 = function _loop2(property) {
          (function fade() {
            this.style.opacity = opacity;

            if ((opacity = parseFloat(opacity) + step) > 1.01) {
              this.style[property] = styles[property];
            } else {
              setTimeout(fade.bind(this), 25);
            }
          }).bind(_this2)();
        };

        for (var property in styles) {
          _loop2(property);
        }
      });
    }
  }, {
    key: "map",
    value: function map(callback) {
      var result = this.el.map(compose(callback, toArray));
      result = unique(flatten(result));
      return this._update(result);
    }
  }, {
    key: "loop",
    value: function loop(property) {
      return function (object) {
        var result = [];

        while (object = object[property]) {
          result.push(object);
        }

        return result;
      };
    }
  }, {
    key: "_update",
    value: function _update(array) {
      // Making sure it's an array.
      this.el = [].concat(array);
      this.length = this.el.length;
      return this;
    }
  }]);

  return Aurora;
}();
// CONCATENATED MODULE: ./src/js/lib/init.js

var $$ = window.$$ = function () {
  return function (selector) {
    return new Aurora_Aurora(selector);
  };
}();
// CONCATENATED MODULE: ./src/js/index.js


var _setup = {
  vars: {
    numberOfSquares: 6,
    colors: [],
    pickedColor: '',
    bodyBackgroundColor: '#242424',
    headerBackgroundColor: 'steelblue'
  },
  selectors: {
    squares: abc('.square'),
    colorDisplay: abc('h1 span'),
    message: abc('#message'),
    h1: abc('h1'),
    resetBtn: abc('#reset'),
    modeBtn: abc('#nav .mode')
  },
  modeButtons: function modeButtons() {
    var _this = this;

    for (var i = 0; i < this.selectors.modeBtn.length; i++) {
      this.selectors.modeBtn[i].addEventListener('click', function (event) {
        loop(_this.selectors.modeBtn, function (btn) {
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

      _setup.selectors.squares[i].style.boxShadow = '';
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
      _setup.selectors.squares[i].style.boxShadow = '';
      handlers.modeChecker(i);
    }
  }
};
app.init();

/***/ })
/******/ ]);
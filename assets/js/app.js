"use strict";

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
};

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

app.init();
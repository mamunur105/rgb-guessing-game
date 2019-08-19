import { $ } from './functions';

const setup = {
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

	modeButtons() {
		for (let i = 0; i < this.selectors.modeBtn.length; i++) {
			this.selectors.modeBtn[i].addEventListener('click', (event) => {
				this.selectors.modeBtn.forEach((btn) => {
					btn.classList.remove('selected');
				});

				event.target.classList.add('selected');
				this.vars.numberOfSquares = event.target.textContent === 'Easy' ? 3 : 6;
				app.reset();
			});
		}
	},

	resetButton() {
		this.selectors.resetBtn[0].addEventListener('click', () => app.reset());
	}
};

const handlers = {
	success(args) {
		setup.selectors.message[0].textContent = 'Correct!';
		setup.selectors.resetBtn[0].textContent = 'Play Again?';
		helpers.changeColor(args);
		setup.selectors.h1[0].style.backgroundColor = args;
	},

	failure(args) {
		args.target.style.backgroundColor = setup.vars.bodyBackgroundColor;
		args.target.style.boxShadow = 'none';
		setup.selectors.message[0].textContent = 'Try Again!';
	},

	modeChecker(args) {
		if (setup.vars.colors[args]) {
			setup.selectors.squares[args].style.display = 'block';
			setup.selectors.squares[args].style.backgroundColor = setup.vars.colors[args];
		} else {
			setup.selectors.squares[args].style.display = 'none';
		}
		setup.selectors.squares[args].classList.remove('disabled');
	}
};

const helpers = {
	generateRandomColors(number) {
		let colors = [];

		for (let index = 0; index < number; index++) {
			colors.push(this.randomColor());
		}

		return colors;
	},

	randomColor() {
		let r = Math.floor(Math.random() * 256),
			g = Math.floor(Math.random() * 256),
			b = Math.floor(Math.random() * 256);

		return `rgb(${r}, ${g}, ${b})`;
	},

	pickColor() {
		let rand = Math.floor(Math.random() * setup.vars.colors.length);

		return setup.vars.colors[rand];
	},

	changeColor(color) {
		for (let i = 0; i < setup.selectors.squares.length; i++) {
			setup.selectors.squares[i].style.backgroundColor = color;
			setup.selectors.squares[i].classList.add('disabled');
		}
	}
};

const app = {
	init() {
		this.setup();
		this.actions();
		this.reset();
	},

	setup() {
		setup.vars;
		setup.modeButtons();
		setup.resetButton();
	},

	actions() {
		for (let i = 0; i < setup.selectors.squares.length; i++) {
			setup.selectors.squares[i].style.backgroundColor = setup.vars.colors[i];

			setup.selectors.squares[i].addEventListener('click', (event) => {
				let clickedColor = event.target.style.backgroundColor;

				if (clickedColor === setup.vars.pickedColor) {
					handlers.success(clickedColor);
				} else {
					handlers.failure(event);
				}
			});
		}
	},

	reset() {
		setup.vars.colors = helpers.generateRandomColors(setup.vars.numberOfSquares);
		setup.vars.pickedColor = helpers.pickColor();
		setup.selectors.colorDisplay[0].textContent = setup.vars.pickedColor;
		setup.selectors.message[0].textContent = '';
		setup.selectors.resetBtn[0].textContent = 'New game';
		setup.selectors.h1[0].style.backgroundColor = setup.vars.headerBackgroundColor;

		for (let i = 0; i < setup.selectors.squares.length; i++) {
			handlers.modeChecker(i);
		}
	}
};

// missing forEach on NodeList for IE11
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

app.init();

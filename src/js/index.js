import { $$ } from './lib/init';
import gameHelpers from './Helpers';
import { ready } from './lib/utils';

const setup = {
	vars: {
		numberOfSquares: 6,
		colors: [],
		pickedColor: '',
		bodyBackgroundColor: '#242424',
		headerBackgroundColor: 'steelblue'
	},

	selectors: {
		squares: $$('.square'),
		colorDisplay: $$('h1 span'),
		message: $$('#message'),
		h1: $$('h1'),
		resetBtn: $$('#reset'),
		modeBtn: $$('#nav .mode')
	},

	modeButtons() {
		this.selectors.modeBtn.each(function() {
			$$(this).on('click', function(e) {
				setup.selectors.modeBtn.each(function() {
					$$(this).removeClass('selected');
				});
				$$(e.target).addClass('selected');
				setup.vars.numberOfSquares = $$(e.target).getText() === 'Easy' ? 3 : 6;
				app.reset();
			});
		});
	},

	resetButton() {
		this.selectors.resetBtn.on('click', function() {
			app.reset();
		});
	}
};

const handlers = {
	success(args) {
		setup.selectors.message.text('Correct!');
		setup.selectors.resetBtn.text('Play Again?');
		gameHelpers.changeColor(setup.selectors.squares, args);
		setup.selectors.h1.css({ 'background-color': args });
	},

	failure(args) {
		$$(args).css({
			'background-color': setup.vars.bodyBackgroundColor,
			'box-shadow': 'none'
		});

		setup.selectors.message.text('Try Again!');
	},

	modeChecker(args) {
		if (setup.vars.colors[args]) {
			$$(setup.selectors.squares.el[args]).css({
				display: 'block',
				'background-color': setup.vars.colors[args]
			});
		} else {
			$$(setup.selectors.squares.el[args]).hide();
		}
		$$(setup.selectors.squares.el[args]).removeClass('disabled');
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
			$$(setup.selectors.squares.el[i]).css({ 'background-color': setup.vars.colors[i] });

			$$(setup.selectors.squares.el[i]).on('click', function(e) {
				let clickedColor = $$(e.target).getStyle('background-color');

				if (clickedColor === setup.vars.pickedColor) {
					handlers.success(clickedColor);
				} else {
					handlers.failure(e.target);
				}
			});
		}
	},

	reset() {
		setup.vars.colors = gameHelpers.generateRandomColors(setup.vars.numberOfSquares);
		setup.vars.pickedColor = gameHelpers.pickColor(setup.vars.colors);
		setup.selectors.colorDisplay.text(setup.vars.pickedColor);
		setup.selectors.message.text('');
		setup.selectors.resetBtn.text('New game');
		setup.selectors.h1.css({ 'background-color': setup.vars.headerBackgroundColor });

		for (let i = 0; i < setup.selectors.squares.length; i++) {
			$$(setup.selectors.squares.el[i]).css({ 'box-shadow': '' });
			handlers.modeChecker(i);
		}
	}
};

ready(app.init());

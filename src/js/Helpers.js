class GameHelpers {
	static randomColor() {
		let r = Math.floor(Math.random() * 256),
			g = Math.floor(Math.random() * 256),
			b = Math.floor(Math.random() * 256);

		return `rgb(${r}, ${g}, ${b})`;
	}

	static generateRandomColors(number) {
		let colors = [];

		for (let i = 0; i < number; i++) {
			colors.push(this.randomColor());
		}

		return colors;
	}

	static pickColor(colorArray) {
		const random = Math.floor(Math.random() * colorArray.length);

		return colorArray[random];
	}

	static changeColor(el, color) {
		el.each(function() {
			$$(this).css({
				'background-color': color,
				'box-shadow': ''
			});

			$$(this).addClass('disabled');
		});
	}
}

export default GameHelpers;

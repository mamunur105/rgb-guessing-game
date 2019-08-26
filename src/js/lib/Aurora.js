import { query, retrieve, compose, join, toArray, unique, flatten } from './utils';

export class Aurora {
	constructor(selector) {
		this.el = typeof selector === 'string' ? query(selector) : [].concat(toArray(selector));

		this.first = this.el;
		this.length = this.el.length;
	}

	get(index) {
		return index === undefined ? this.el : this.el[index];
	}

	parent() {
		return this.map(retrieve('parentNode'));
	}

	next() {
		return this.map(retrieve('nextElementSibling'));
	}

	previous() {
		return this.map(retrieve('previousElementSibling'));
	}

	children() {
		return this.map(retrieve('children'));
	}

	parents() {
		return this.map(this.loop('parentNode'));
	}

	nextAll() {
		return this.map(this.loop('nextElementSibling'));
	}

	prevAll() {
		return this.map(this.loop('previousElementSibling'));
	}

	siblings() {
		let prev = this.loop('previousElementSibling');
		let next = this.loop('nextElementSibling');

		return this.map(join(prev, next));
	}

	filter(selector) {
		let result = this.el.filter((x) => {
			return query(selector, x.parentNode).indexOf(x) > -1;
		});

		return this._update(flatten(result));
	}

	each(callback) {
		for (let el of toArray(this.el)) {
			callback.call(el);
		}

		return this;
	}

	addClass(className) {
		return this.each(function() {
			this.classList.add(className);
		});
	}

	removeClass(className) {
		return this.each(function() {
			this.classList.remove(className);
		});
	}

	hasClass(className) {
		return this.el[0].classList.contains(className);
	}

	toggleClass(className) {
		return this.each(function() {
			this.classList.toggle(className);
		});
	}

	getText() {
		return this.el[0].textContent;
	}

	text(content) {
		return this.each(function() {
			return (this.textContent = content);
		});
	}

	html(content) {
		return this.each(function() {
			return (this.innerHTML = content);
		});
	}

	before(content) {
		return this.each(function() {
			return this.insertAdjacentHTML('beforebegin', content);
		});
	}

	after(content) {
		return this.each(function() {
			return this.insertAdjacentHTML('afterend', content);
		});
	}

	prepend(content) {
		return this.each(function() {
			return this.insertAdjacentHTML('afterbegin', content);
		});
	}

	append(content) {
		return this.each(function() {
			return this.insertAdjacentHTML('beforeend', content);
		});
	}

	val(value) {
		if (value === undefined) {
			return this.el[0].value;
		}

		return (this.el[0].value = value);
	}

	attr(name, value) {
		if (value === undefined) {
			return this.el[0].getAttribute(name);
		}

		return this.el[0].setAttribute(name, value);
	}

	data(name, value) {
		if (value === undefined) {
			return this.el[0].dataset[name];
		}

		return (this.el[0].dataset[name] = value);
	}

	css(styles) {
		return this.each(function() {
			for (let property in styles) {
				this.style[property] = styles[property];
			}
		});
	}

	show(css) {
		return this.each(function() {
			const styles = css || { display: 'block' };
			for (let property in styles) {
				return (this.style[property] = styles[property]);
			}
		});
	}

	hide(css) {
		return this.each(function() {
			const styles = css || { display: 'none' };
			for (let property in styles) {
				return (this.style[property] = styles[property]);
			}
		});
	}

	on(event, callback) {
		return this.each(function() {
			this.addEventListener(event, callback, false);
		});
	}

	// on(eventName, selector, callback) {
	// 	return this.each(function() {
	// 		this.addEventListener(
	// 			eventName,
	// 			function(event) {
	// 				console.log(selector.el[0]);

	// 				const id = selector.el[0].id ? `#${selector.el[0].id}` : '',
	// 					className = selector.el[0].className ? `.${selector.el[0].className}` : '',
	// 					tagName = selector.el[0].tagName;

	// 				if (event.target && event.target.matches(className || id || tagName)) {
	// 					callback.call(this, event);
	// 				}
	// 			},
	// 			false
	// 		);

	// 		return this;
	// 	});
	// }

	fadeOut(duration, styles) {
		return this.each(function() {
			let opacity = getComputedStyle(this, null).opacity || 1,
				step = 25 / (duration || 300);

			for (let property in styles) {
				(function fade() {
					this.style.opacity = opacity;

					if ((opacity -= step) < -0.1) {
						this.style[property] = styles[property];
					} else {
						setTimeout(fade.bind(this), 25);
					}
				}.bind(this)());
			}
		});
	}

	fadeIn(duration, styles) {
		return this.each(function() {
			let opacity = getComputedStyle(this, null).opacity || 0,
				step = 25 / (duration || 300);

			for (let property in styles) {
				(function fade() {
					this.style.opacity = opacity;

					if ((opacity = parseFloat(opacity) + step) > 1.01) {
						this.style[property] = styles[property];
					} else {
						setTimeout(fade.bind(this), 25);
					}
				}.bind(this)());
			}
		});
	}

	map(callback) {
		let result = this.el.map(compose(callback, toArray));
		result = unique(flatten(result));

		return this._update(result);
	}

	loop(property) {
		return (object) => {
			let result = [];

			while ((object = object[property])) {
				result.push(object);
			}

			return result;
		};
	}

	_update(array) {
		// Making sure it's an array.
		this.el = [].concat(array);
		this.length = this.el.length;

		return this;
	}
}

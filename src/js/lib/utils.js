export function abc(selector) {
	let elements;

	if (selector === 'document') {
		elements = [ document ];
	} else if (selector == 'window') {
		elements = [ window ];
	} else if (selector === 'body') {
		elements = document.body;
	} else {
		elements = [].slice.call(document.querySelectorAll(selector));
	}

	return elements;
}

export const loop = (arr, callback, method) => {
	return [][method || 'forEach'].call(arr, callback);
};

export const retrieve = (property) => (object) => object[property];

export function compose() {
	return [].reduce.call(arguments, function(f, g) {
		return function() {
			return g(f.apply(this, arguments));
		};
	});
}

export function join(f, g) {
	return function() {
		return f.apply(this, arguments).concat(g.apply(this, arguments));
	};
}

export const toArray = (nodelist) =>
	!nodelist.length || typeof nodelist !== 'object' ? nodelist : [].slice.call(nodelist);

export const query = (selector, element) => toArray((element || document).querySelectorAll(selector));

export const unique = (array) => array.filter((a, b) => array.indexOf(a) === b);

export const flatten = (array) => [].concat.apply([], array);

export function ready(fn) {
	if (document.readyState !== 'loading') {
		fn();
	} else if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', fn);
	} else {
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState !== 'loading') {
				fn();
			}
		});
	}
}

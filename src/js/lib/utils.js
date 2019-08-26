/**
 * Retrieve the property of an Object.
 */
export const retrieve = (property) => (object) => object[property];

/**
 * Function composition.
 */
export function compose() {
	return [].reduce.call(arguments, function(f, g) {
		return function() {
			return g(f.apply(this, arguments));
		};
	});
}

/**
 * Join two arrays.
 */
export function join(f, g) {
	return function() {
		return f.apply(this, arguments).concat(g.apply(this, arguments));
	};
}

/**
 * Convert nodelist into array.
 */
export const toArray = (nodelist) =>
	!nodelist.length || typeof nodelist !== 'object' ? nodelist : [].slice.call(nodelist);

/**
* Retrieve array of a given element in a given context.
*/
export const query = (selector, element) => toArray((element || document).querySelectorAll(selector));

/**
 * Get the unique values of an array.
 */
export const unique = (array) => array.filter((a, b) => array.indexOf(a) === b);

/**
 * Flatten multiple array into one.
 */
export const flatten = (array) => [].concat.apply([], array);

/**
 * Check if DOM is ready.
 */
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

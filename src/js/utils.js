export function $(selector) {
	let elements;

	if (selector === 'document') {
		elements = [ document ];
	} else if (selector === 'window') {
		elements = [ window ];
	} else if (selector === 'body') {
		elements = document.body;
	} else {
		elements = document.querySelectorAll(selector);
	}

	return elements;
}

// missing forEach on NodeList for IE11
export const ieFix = (function ie11nodelistfixer() {
	if (window.NodeList && !NodeList.prototype.forEach) {
		NodeList.prototype.forEach = Array.prototype.forEach;
	}
})();

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

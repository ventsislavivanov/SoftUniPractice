function toUpper(str) {
	console.log(
		str.toUpperCase()
		.split(/\W+/)
		.filter(element => element !== '')
		.join(', '));
}

toUpper("Hi, how are you?");

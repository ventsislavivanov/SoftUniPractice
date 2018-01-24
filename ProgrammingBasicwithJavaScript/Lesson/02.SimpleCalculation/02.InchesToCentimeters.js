function inchesToCentimeters([arg1]) {
	let inches = parseFloat(arg1);
	let centimeters = inches * 2.54;
	console.log(inches + " are " + centimeters);
}

inchesToCentimeters([5]);
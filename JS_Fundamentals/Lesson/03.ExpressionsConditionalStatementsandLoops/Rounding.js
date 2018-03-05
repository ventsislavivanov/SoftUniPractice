function rounding(input) {
	let number = input[0];
	let precision  = input[1];

	if (precision > 15) {
		precision = 15;
	}

	let multiplier = Math.pow(10, precision);
	return Math.round(number * multiplier) / multiplier;
}

let arr = [3.1415926535897932384626433832795, 2];
let output = arr;
console.log(rounding(arr));
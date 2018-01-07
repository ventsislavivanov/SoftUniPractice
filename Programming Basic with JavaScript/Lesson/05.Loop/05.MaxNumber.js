function maxNumbers(args) {
	let n = Number(args[0]);
	let max = Number(args[1]);

	for (i = 1; i <= n; i++) {
		let currentNumber = Number(args[i]);
		console.log(currentNumber);
		if (currentNumber > max) {
			max = currentNumber;
		}
	}
		console.log(max)
}

maxNumbers(['3', '94', '99', '-4']);
function minNumbers(args) {
	let n = Number(args[0]);
	let min = Number(args[1]);

	for (i = 1; i <= n; i++) {
		let currentNumber = Number(args[i]);
		if (currentNumber < min) {
			 min = currentNumber;
		}
	}
		console.log(min)
}

minNumbers(['3', '94', '99', '-4']);
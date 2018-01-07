function game(arg) {
	let n = Number(arg[0]);
	let start = 0;
	let result = 0;

	let countBetween40And50 = 0;
	let countBetween30And39 = 0;
	let countBetween20And29 = 0;
	let countBetween10And19 = 0;
	let countBetween0And9 = 0;
	let countInvalidNumber = 0;


	for (let i = 1; i <= n; i++) {
		let currentNumber = Number(arg[i]);

		if (currentNumber >= 40 && currentNumber <= 50) {
			countBetween40And50++;
			result += start + 100;
		} else if (currentNumber >= 30 && currentNumber <= 39) {
			countBetween30And39++;
			result += start + 50;
		} else if (currentNumber >= 20 && currentNumber <= 29) {
			countBetween20And29++;
			result += currentNumber * 40 / 100;
		} else if (currentNumber >= 10 && currentNumber <= 19) {
			countBetween10And19++;
			result += currentNumber * 30 / 100;
		} else if (currentNumber >= 0 && currentNumber <= 9) {
			countBetween0And9++;
			result += currentNumber * 20 / 100;
		} else {
			countInvalidNumber++;
			result /= 2; 
		}
	}

	console.log(result.toFixed(2));
	console.log(`From 0 to 9: ${(countBetween0And9 / n *100).toFixed(2)}%`);
	console.log(`From 10 to 19: ${(countBetween10And19 / n *100).toFixed(2)}%`);
	console.log(`From 20 to 29: ${(countBetween20And29 / n *100).toFixed(2)}%`);
	console.log(`From 30 to 39: ${(countBetween30And39 / n *100).toFixed(2)}%`);
	console.log(`From 40 to 50: ${(countBetween40And50 / n *100).toFixed(2)}%`);
	console.log(`Invalid numbers: ${(countInvalidNumber / n *100).toFixed(2)}%`);
}

game(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);
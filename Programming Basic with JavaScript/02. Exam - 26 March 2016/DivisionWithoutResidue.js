function divisionWithoutResidue(args) {
	let n = Number(args[0]);
	let counter4 = 0;
	let counter3 = 0;
	let counter2 = 0;

	for (let i = 1; i <= n; i ++) {
		let currentNumber = Number(args[i]);
		if (currentNumber % 2 == 0) {
			counter2++;
		}
		if (currentNumber % 3 == 0) {
			counter3++;
		}
		if (currentNumber % 4 == 0) {
			counter4++;
		}
	}
	console.log((counter2 / n * 100).toFixed(2) + '%')
	console.log((counter3 / n * 100).toFixed(2) + '%')
	console.log((counter4 / n * 100).toFixed(2) + '%')
}


divisionWithoutResidue([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])
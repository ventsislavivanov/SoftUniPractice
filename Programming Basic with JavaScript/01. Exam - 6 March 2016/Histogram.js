function histrogram(args) {
	let n = Number(args[0]);
	let counter199 = 0;
	let counter399 = 0;
	let counter599 = 0;
	let counter799 = 0;
	let counter800  = 0;

	for (i = 1; i <= n; i++) {
		let currentNumber = Number(args[i]);
		if (currentNumber >= 800) {
			counter800 ++;
		} else if (currentNumber >= 600) {
			counter799++;
		}  else if (currentNumber >= 400) {
			counter599++;
		}  else if (currentNumber >= 200) {
			counter399++;
		}  else if (currentNumber < 200) {
			counter199++;
		}
	}

	console.log((counter199 / n * 100).toFixed(2) + "%");
	console.log((counter399 / n * 100).toFixed(2) + "%");
	console.log((counter599 / n * 100).toFixed(2) + "%");
	console.log((counter799 / n * 100).toFixed(2) + "%");
	console.log((counter800 / n * 100).toFixed(2) + "%");
}

histrogram(["3", "1", "2", "999"]);

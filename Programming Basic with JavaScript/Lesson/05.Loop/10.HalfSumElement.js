function halfSumElements(args) {
	let n = Number(args[0]);
	let max = Number.NEGATIVE_INFINITY;
	let sum = 0;

	for (i = 1; i <= n; i++) {
		let currentNumber = Number(args[i]);
		sum += currentNumber;
		if (currentNumber > max) {
			max = currentNumber;
		}		
	}
	let different = Math.abs(max - (sum - max));
	
	if (sum - max == max) {
		console.log("Yes");
		console.log("Sum = " + max);
	} else {
		console.log("No");
		console.log("Diff = " + different);
	}
}


halfSumElements(["3", "1", "1", "1"]);




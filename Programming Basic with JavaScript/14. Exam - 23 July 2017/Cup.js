function drawingCup([arg1]) {
	let n = Number(arg1);
	let width = n * 5;
	let outOfPoint = n;

	for (let i = 0; i < n / 2; i++) {
		let innerDashed = (n * 5) - (2 * outOfPoint);
		console.log(
			'.'.repeat(outOfPoint) + 
			"#".repeat(innerDashed) +
			'.'.repeat(outOfPoint)
		);
		outOfPoint++;
	}

	for (let i = 0; i < n / 2 + 1; i++) {
		outOfPoint++;
		let innerDashed = (n * 5) - (2 * outOfPoint);
		console.log(
			'.'.repeat(outOfPoint - 1) + 
			"#" +
			".".repeat(innerDashed) +
			"#" +
			'.'.repeat(outOfPoint - 1)
		);
	}

	let innerDashed = (n * 5) - (2 * outOfPoint);
	console.log(
			'.'.repeat(outOfPoint - 1) + 
			"#".repeat(innerDashed + 2) +
			'.'.repeat(outOfPoint - 1)
	);

	for (let i = 0; i < n / 2 ; i++) {
		let innerDashed = (n * 5) - (2 * outOfPoint);
		console.log(
			'.'.repeat(outOfPoint - 3) +
			"#".repeat(innerDashed + 6) +
			'.'.repeat(outOfPoint - 3)
		);
	}
	innerDashed = (n * 5) - (2 * outOfPoint);
		console.log(
			'.'.repeat((n * 5) / 2 - 5) + 
			"D^A^N^C^E^" +
			'.'.repeat((n * 5) / 2 - 5)
		);

	for (let i = 0; i < n / 2 + 1 ; i++) {
		let innerDashed = (n * 5) - (2 * outOfPoint);
		console.log(
			'.'.repeat(outOfPoint - 3) + 
			"#".repeat(innerDashed + 6) +
			'.'.repeat(outOfPoint - 3)
		);
	}
}


drawingCup(['8']);
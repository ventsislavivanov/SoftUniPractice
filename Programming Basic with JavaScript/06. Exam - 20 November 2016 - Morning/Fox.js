function fox([arg]) {
	let n = Number(arg);
	let width = 2 * n + 3
	let left = (n + 3) / 2;
	let center = n;
	let right = (n + 3) / 2;

	for (let i = 1; i <= n; i++) {
		console.log(
			"*".repeat(i) +
			"\\" + 
			"-".repeat(width - 2 * i - 2) +
			"/" + 
			"*".repeat(i)
		);
	}

	for (let i = 1; i <= n / 3; i++) {
		console.log(
			"|" + 
			"*".repeat(left - 2) + 
			"\\" + 
			"*".repeat(center) + 
			"/" + 
			"*".repeat(right - 2) +
			"|"
		);
		left ++;
		center -=2;
		right ++;
	}

	for (let i = 1; i <= n; i++) {
		console.log(
			"-".repeat(i) +
			"\\" + 
			"*".repeat(width - 2 * i - 2) +
			"/" + 
			"-".repeat(i)
		);
	}
}

fox(['11'])
function diamond([arg]) {
	let n = Number(arg);
	let width = 5 * n;
	let height = 3 * n + 2;

	console.log(
			".".repeat(n ) +
			"*" .repeat((5 * n) - 2 * n ) +
			".".repeat(n) 
	);

	for (let i = 1; i <= n - 1; i++) {
		console.log(
			".".repeat(n - i) +
			"*" + 
			"." .repeat((5 * n) - 2 *(n -i) - 2) +
			"*" + 
			".".repeat(n - i) 
		);
	}
	console.log(
		"*".repeat(5 * n)
	);

	for (let i = 1; i < 2 * n + 2 - 1; i++) {
		console.log(
			".".repeat(i) +
			"*" + 
			"." .repeat((5 * n - i) - 2 - i) +
			"*" + 
			".".repeat(i) 
		);
	}
	for (let i = 2 * n + 2 - 1; i < 2 * n + 2; i++) {
		console.log(
			".".repeat(i) +
			"*" + 
			"*" .repeat((5 * n - i) - 2 - i) +
			"*" + 
			".".repeat(i) 
		);
	}
}

diamond(['4']);
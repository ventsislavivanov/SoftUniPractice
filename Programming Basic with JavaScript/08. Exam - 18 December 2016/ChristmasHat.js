function christmasHat(arg) {
	let n = Number(arg);
	let width = 4 * n + 1;
	let height = 2 * n + 5;

	// let left = 2 * n - 1;
	// let center = 3;
	// let right = 2 * n - 1;

	console.log(
		'.'.repeat((4 * n) / 2 - 1) + 
		'/|\\' +
		'.'.repeat((4 * n) / 2 - 1)
	);

	console.log(
		'.'.repeat((4 * n) / 2 - 1) + 
		'\\|/' +
		'.'.repeat((4 * n) / 2 - 1)
	);

	for (let i = 0; i < 2 * n; i++) {
		console.log(
		'.'.repeat(2 * n - 1 - i) + 
		'*' +
		'-'.repeat(i) +
		'*' +
		'-'.repeat(i) +
		'*' +
		'.'.repeat(2 * n - 1 - i)
		);
	}

	console.log(
		'*'.repeat(width)
	);

	console.log(
		'*.'.repeat(width / 2) +
		'*'
	);
	
	console.log(
		'*'.repeat(width)
	);
}

christmasHat(['7']);


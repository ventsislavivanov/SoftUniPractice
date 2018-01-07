function snowflake(arg) {
	let n = Number(arg);
	let width = 2 * n + 3;
	let height = 2 * n + 1

	let outerPoint = 0;
	let innerPoint = n;

	for (let i = 0; i < n - 1; i++) {
		console.log(
			'.'.repeat(outerPoint) +
			'*' +
			'.'.repeat(innerPoint) +
			'*' +
			'.'.repeat(innerPoint) +
			'*' +
			'.'.repeat(outerPoint)
		);
		outerPoint++;
		innerPoint--;
	}

	console.log(
		'.'.repeat(n - 1) +
		'*'.repeat(width - 2 * n + 2) +
		'.'.repeat(n - 1)
	);

	console.log(
		'*'.repeat(width)
	);

	console.log(
		'.'.repeat(n - 1) +
		'*'.repeat(width - 2 * n + 2) +
		'.'.repeat(n - 1)
	);

	for (let i = 0; i < n - 1; i++) {
		outerPoint--;
		innerPoint++;
		console.log(
			'.'.repeat(outerPoint) +
			'*' +
			'.'.repeat(innerPoint) +
			'*' +
			'.'.repeat(innerPoint) +
			'*' +
			'.'.repeat(outerPoint)
		);
	}
}

snowflake(['30']);
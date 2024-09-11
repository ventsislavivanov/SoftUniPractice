function hourglass(arg) {
	let n = Number(arg);
	let width = 2 * n + 1;
	let left = 2;
	let center = width - 6;
	let right = 2;


	console.log(
		'*'.repeat(width)
	);

	console.log(
		'.*' +
		' '.repeat(width - 4) +
		'*.'
	);

	for (let i = 1; i <= n - 2; i++) {
		console.log(
			'.'.repeat(left) + 
			'*' + 
			'@'.repeat(center) + 
			'*' +
			'.'.repeat(right)
		);
		left++;
		center -=2;
		right++;		
	}

	console.log(
		'.'.repeat(n) +
		'*' +
		'.'.repeat(n)
	);

	for (let i = 0; i < n - 2; i++) {
		console.log(
			'.'.repeat(n - 1 - i) + 
			'*' + 
			' '.repeat(i) +
			'@' + 
			' '.repeat(i) +
			'*' +
			'.'.repeat(n - 1 - i)
		);
	}

	console.log(
		'.*' +
		'@'.repeat(width - 4) +
		'*.'
	);

	console.log(
		'*'.repeat(width)
	);
}

hourglass(['5'])
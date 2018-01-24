function rocket([arg]) {
	let n = Number(arg);
	let width = 3 * n;

	let left = n / 2;
	let center = 3 * n - 2 - n;
	let right = n / 2;

	for (let i = 0; i < n; i++ ) {
		let side = (3 * n) / 2 - i -1;
		console.log(
			'.'.repeat(side) +
			'/' +
			' '.repeat(3 * n - 2 * side - 2) +
			'\\'+ 
			'.'.repeat(side) 
		);
	}

	console.log(
		'.'.repeat(n / 2) +
		'*'.repeat(3 * n - n) +
		'.'.repeat(n / 2) 
	);

	for (let i = 1; i <= 2 * n; i++) {
		console.log(
			'.'.repeat(n / 2) +
			'|' +
			'\\'.repeat(3 * n - n - 2) +
			'|' +
			'.'.repeat(n / 2)
		);
	}

	for (let i = 0; i < n / 2; i++) {
		console.log(
			'.'.repeat(left) +
			'/' +
			'*'.repeat(center) +
			'\\' +
			'.'.repeat(right) 
		);
		left--;
		center += 2;
		right--;
	}
}


rocket(['4'])
function christmasSock([arg]) {
	let n = Number(arg);
	let height = 3 * n + 3;

	console.log(
		'|' +
		'-'.repeat(2 * n) +
		'|' 
	);
	
	console.log(
		'|' +
		'*'.repeat(2 * n) +
		'|' 
	);

	console.log(
		'|' +
		'-'.repeat(2 * n) +
		'|' 
	);

	let dashes = n - 1;
	let tilde = 2;

	for (let i = 0 ; i < n - 1; i++) {
		console.log(
			'|' +
			'-'.repeat(dashes) +
			'~'.repeat(tilde) +
			'-'.repeat(dashes) +
			'|' 
		);
		dashes--;
		tilde += 2;
	}

	tilde -= 2;
	dashes++;
	
	for (let i = 0 ; i < n - 2; i++) {
		tilde -= 2;
		dashes++;
		console.log(
			'|' +
			'-'.repeat(dashes) +
			'~'.repeat(tilde) +
			'-'.repeat(dashes) +
			'|' 
		);
	}

	for (let i = 0 ; i <= n + 2; i++) {
		if (i == Math.floor((n + 2) / 2 - 1)) {
			console.log(
			'-'.repeat(i) +
			'\\' + 
			'.'.repeat((2 * n + 1 - 5 ) / 2) +
			'MERRY' +
			'.'.repeat((2 * n + 1 - 5 ) / 2) +
			'\\'
			);
		} else if (i == Math.floor((n + 2) / 2 + 1)) {
			console.log(
			'-'.repeat(i) +
			'\\' + 
			'.'.repeat((2 * n - 4 ) / 2) +
			'X-MAS' +
			'.'.repeat((2 * n - 4 ) / 2) +
			'\\'
			);
		} else if (i == n + 2) {
			console.log(
				'-'.repeat(i) +
				'\\' + 
				'_'.repeat(2 * n + 1) +
				')'
			);
		} else {
			console.log(
				'-'.repeat(i) +
				'\\' + 
				'.'.repeat(2 * n + 1) +
				'\\'
			);
		}
	}
}


christmasSock(['3']);
function cupCoffe([arg]) {
	let n = Number(arg);
	let width = 3 * n + 6;
	let height = 3 * n + 1;

	let spaces = 0;
	let inside = 2 * n + 4;
// First part
	for (let i = 0; i < n; i++) {
		console.log(
			' '.repeat(n) +
			'~' +
			' ' +
			'~' +
			' ' +
			'~' 
		);
	}
// Second part
	console.log(
		'='.repeat(width - 1)
	);
// Third part	
	for (let i = 0; i < n - 2; i++) {
		if (i == Math.floor(n / 2) - 1) {
			console.log(
				'|' + 
				'~'.repeat(n) +
				'JAVA' +
				'~'.repeat(n) +
				'|' +
				' '.repeat(n - 1) + 
				'|'
			);	
		} else {
			console.log(
				'|' + 
				'~'.repeat(n) +
				'~~~~' +
				'~'.repeat(n) +
				'|' +
				' '.repeat(n - 1) + 
				'|'
			);
		}
	}
// Fourth part	
	console.log(
		'='.repeat(width - 1)
	);
// Fifth part
	for (let i = 0; i < n; i++) {
		console.log(
			' '.repeat(spaces) +
			'\\' + 
			'@'.repeat(inside) +
			'/'
		);
		spaces++;
		inside -= 2;
	}
// Sixth part
	console.log(
		'='.repeat(n) + 
		'='.repeat(6) +
		'='.repeat(n)
	);
}

cupCoffe(['5']);
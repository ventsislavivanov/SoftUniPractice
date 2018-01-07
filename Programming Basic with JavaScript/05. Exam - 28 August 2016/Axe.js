function axe(arg1) {
	let n = Number(arg1);
	let width = 5 * n;

	let	leftPart = 3 * n;
	let middlePart = n - 1;
	let rightPart = n - 1;

	//First
	console.log(
		'-'.repeat(leftPart) +
		"*".repeat(2) + 
		"-".repeat(2 * n - 2)
	);
	// Second
	for (let i = 1; i <= n - 1; i++) {
		console.log(
			'-'.repeat(leftPart) +
			'*' +
			'-'.repeat(i) +
			'*' +
			'-'.repeat(2 * n - 2 - i)
		);
	}

	//third
	for (let i = 1; i <= n  / 2 ; i++) {
	console.log(
		'*'.repeat(leftPart) +
		'*' +
		'-'.repeat(middlePart) +
		'*' +
		'-'.repeat(rightPart)
		);
	}

	// fourth
	for (let i = 1; i <= n / 2 -1; i++) {
		console.log(
			'-'.repeat(leftPart) +
			'*' +
			'-'.repeat(middlePart) +
			'*' + 
			'-'.repeat(rightPart)
		);

		leftPart--;
		middlePart +=2;
		rightPart--;
	}
	
	// Fifth part
	console.log(
		'-'.repeat(leftPart) +
		'*'.repeat(middlePart + 2) +
		'-'.repeat(Math.ceil(n / 2 ))
	);
}

axe('2');
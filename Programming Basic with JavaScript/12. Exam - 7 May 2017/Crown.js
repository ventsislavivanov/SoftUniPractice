function crown(arg) {
	let n = Number(arg);
	let width = (2 * n) - 1;
	let height = n / 2 + 4;
	let spaces = (width - 3) / 2;
	
	console.log(
		'@' +
		' '.repeat(spaces) +
		'@' +
		' '.repeat(spaces) +
		'@'
	);

	console.log(
		'**' +
		' '.repeat(spaces - 1) +
		'*' +
		' '.repeat(spaces - 1) +
		'**' 
	);
	let point = 1;
	let pointCenter = 1;
	for (let i = 0; i < n / 2 - 2; i++) {
		console.log(
			'*' +
			'.'.repeat(point) +
			'*' +
			' '.repeat(spaces - 3) +
			'*' +
			'.'.repeat(pointCenter) +
			'*' +
			' '.repeat(spaces - 3) +
			'*' +
			'.'.repeat(point) +
			'*'
		);
		point++;
		pointCenter += 2;
		spaces -=2;
	}
	
	console.log(
		'*' +
		'.'.repeat(n / 2 - 1) +
		'*'+
		'.'.repeat(pointCenter) +
		'*' +
		'.'.repeat(n / 2 - 1) +
		'*'
	);

	console.log(
		'*' +
		'.'.repeat(n / 2) +
		'*'.repeat(n - n/2 -2)+
		'.' +
		'*'.repeat(n - n / 2 - 2) +
		'.'.repeat(n / 2) +
		'*'
	);

	console.log('*'.repeat(width));
	console.log('*'.repeat(width));
}


crown(['20']);


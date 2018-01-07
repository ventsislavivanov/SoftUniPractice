function logo(arg) {
	let n = Number(arg);
	let width = 12 * n - 5;
	let height = 4 * n - 2;

	let left = Math.floor(width / 2);
	let center = 1;
	let right = Math.floor(width / 2);

	for (let i = 1; i <= 2 * n; i++) {
		console.log(
			'.'.repeat(left) +
			'#'.repeat(center) + 
			'.'.repeat(right)
		);
		left -= 3;
		center += 6;	 
		right -= 3; 
	}

	let left2 = 2;
	let center2 = width - 6; 
	let right2 = 3; 

	for (let i = 1; i <= n - 2; i++) {
		console.log(
			'|' +
			'.'.repeat(left2) +
			'#'.repeat(center2) + 
			'.'.repeat(right2)
		);
		left2 +=3;
		center2 -=6;	 
		right2 +=3; 
	}

	for (i = 1; i <= n - 1; i++) {
		console.log(
			'|' +
			'.'.repeat(left2 + 3) +
			'#'.repeat(center2 - 6) + 
			'.'.repeat(right2 + 3)
		);
	}

	console.log(
			'@' +
			'.'.repeat(left2 + 3) +
			'#'.repeat(center2 - 6) + 
			'.'.repeat(right2 + 3)
		);
}

logo(['5']);

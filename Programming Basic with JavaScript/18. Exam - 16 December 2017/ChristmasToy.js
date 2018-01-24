function christmasToy([arg1]) {
	let n = Number(arg1);
	
	console.log(
		'-'.repeat(n * 2) +
		'*'.repeat(n) +
		'-'.repeat(n * 2)
	);
	
	let dash = (n * 2) - 2;
	let stars = 1;
	let ampersand = n + 2;

	for (let i = 1; i <= n / 2; i++) {
		console.log(
			'-'.repeat(dash) +
			'*'.repeat(stars) +
			'&'.repeat(ampersand) +
			'*'.repeat(stars) +
			'-'.repeat(dash)
		);
		dash -= 2;
		stars++;
		ampersand += 2;
	}
	
	let newDash = n - 1;
	let newStars = 2;
	let tilde = (n * 3) - 2;

	for (let i = 1; i <= n / 2; i++) {
		console.log(
			'-'.repeat(newDash) +
			'*'.repeat(newStars) +
			'~'.repeat(tilde) +
			'*'.repeat(newStars) +
			'-'.repeat(newDash)
		);
		newDash--;;
		tilde += 2;
	}
	
	console.log(
		'-'.repeat(newDash + 1) +
		'*'.repeat(newStars - 1) +
		'|'.repeat(tilde) +
		'*'.repeat(newStars - 1) +
		'-'.repeat(newDash + 1)
	);
	
	for (let i = n / 2; i >= 1; i--) {
		newDash++;;
		tilde -= 2;
		console.log('-'.repeat(newDash) +
			'*'.repeat(newStars) +
			'~'.repeat(tilde) +
			'*'.repeat(newStars) +
			'-'.repeat(newDash)
		);
	}
	
	for (let i = n / 2; i >= 1; i--) {
		dash += 2;
		stars--;
		ampersand -= 2;
		console.log(
			'-'.repeat(dash) +
			'*'.repeat(stars) +
			'&'.repeat(ampersand) +
			'*'.repeat(stars) +
			'-'.repeat(dash)
		);
	}
	
	console.log(
		'-'.repeat(n * 2) +
		'*'.repeat(n) +
		'-'.repeat(n * 2)
	);
}
 
christmasToy(['8']);
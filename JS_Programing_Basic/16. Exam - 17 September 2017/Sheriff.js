function sheriff([arg]) {
	let n = Number(arg);
	let width = 3 * n;

	let dots = width / 2;
	let dotsFor = width / 2 - n;
	let hixes = n;

	console.log(
		'.'.repeat(dots) +
		'x' +
		'.'.repeat(dots)
	);
	dots--;
	console.log(
		'.'.repeat(dots) +
		'/' +
		'x' +
		'\\' +
		'.'.repeat(dots)
	);

	console.log(
		'.'.repeat(dots) +
		'x' +
		'|' +
		'x' +
		'.'.repeat(dots)
	);

	for (let i = 1; i <= n / 2; i++) {
		console.log(
			'.'.repeat(dotsFor) +
			'x'.repeat(hixes) +
			'|' +
			'x'.repeat(hixes) +
			'.'.repeat(dotsFor)
		);
		dotsFor--;
		hixes++;
	}

	console.log(
		'.'.repeat(dotsFor) +
		'x'.repeat(hixes) +
		'|' +
		'x'.repeat(hixes) +
		'.'.repeat(dotsFor)
	);

	for (let i = 1; i <= n / 2; i++) {
		dotsFor++;
		hixes--;
		console.log(
			'.'.repeat(dotsFor) +
			'x'.repeat(hixes) +
			'|' +
			'x'.repeat(hixes) +
			'.'.repeat(dotsFor)
		);
	}

	console.log(
		'.'.repeat(dots) +
		'/' +
		'x' +
		'\\' +
		'.'.repeat(dots)
	);

	console.log(
		'.'.repeat(dots) +
		'\\' +
		'x' +
		'/' +
		'.'.repeat(dots)
	);

		for (let i = 1; i <= n / 2; i++) {
		console.log(
			'.'.repeat(dotsFor) +
			'x'.repeat(hixes) +
			'|' +
			'x'.repeat(hixes) +
			'.'.repeat(dotsFor)
		);
		dotsFor--;
		hixes++;
	}

	console.log(
		'.'.repeat(dotsFor) +
		'x'.repeat(hixes) +
		'|' +
		'x'.repeat(hixes) +
		'.'.repeat(dotsFor)
	);

	for (let i = 1; i <= n / 2; i++) {
		dotsFor++;
		hixes--;
		console.log(
			'.'.repeat(dotsFor) +
			'x'.repeat(hixes) +
			'|' +
			'x'.repeat(hixes) +
			'.'.repeat(dotsFor)
		);
	}

	console.log(
		'.'.repeat(dots) +
		'x' +
		'|' +
		'x' +
		'.'.repeat(dots)
	);

	console.log(
		'.'.repeat(dots) +
		'\\' +
		'x' +
		'/' +
		'.'.repeat(dots)
	);

	dots++;

	console.log(
		'.'.repeat(dots) +
		'x' +
		'.'.repeat(dots)
	);
}

sheriff(['3']);

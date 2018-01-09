function grandpaStavri(args) {
	let days = Number(args[0]);
	let currentLiter = 0;
	let liters = 0;
	let currentDegree = 0;
	let dayRakia = 0;
	let rakia = 0;
	let averageDegree = 0;

	for (let i = 1; i < args.length; i++) {
		let currentIndexArgs = Number(args[i])
		if (i % 2 != 0) {
			currentLiter = currentIndexArgs;
			liters += currentIndexArgs; 
		}

		if (i % 2 == 0) {
			currentDegree = currentIndexArgs;
			dayRakia = currentLiter * currentDegree;
			rakia += dayRakia;
		}
	}

	averageDegree = rakia / liters;

	console.log(`Liter: ${liters.toFixed(2)}`);
	console.log(`Degrees: ${averageDegree.toFixed(2)}`);

	if (averageDegree >= 42) {
		console.log(`Dilution with distilled water!`);
	} else if (averageDegree >= 38) {
		console.log(`Super!`);
	} else {
		console.log('Not good, you should baking!');
	}
}

//grandpaStavri(['4', '190', '23', '100', '23', '200', '45', '30', '34']);
grandpaStavri(['3', '100', '45', '50', '55', '150', '36']);
// grandpaStavri(['2', '200', '43', '200', '40']);
// grandpaStavri(['1', '200', '41.9']);
// grandpaStavri(['4', '190', '23', '100', '23', '200', '45', '30', '34']);
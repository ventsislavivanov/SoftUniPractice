function bikeRace([arg1, arg2, arg3]) {
	let juniorBikers = Number(arg1);
	let seniorBikers = Number(arg2);
	let kindRoute = arg3;

	let taxesForJunior = 0;
	let taxesForSenior = 0;

	let group = juniorBikers + seniorBikers;

	if (kindRoute == 'trail') {
		taxesForJunior = 5.5;
		taxesForSenior = 7;
	} else if (kindRoute == 'cross-country') {
		taxesForJunior = 8;
		taxesForSenior = 9.5;
	} else if (kindRoute == 'downhill') {
		taxesForJunior = 12.25;
		taxesForSenior = 13.75;
	} else if (kindRoute == 'road') {
		taxesForJunior = 20;
		taxesForSenior = 21.5;
	}

	if (group >= 50 && kindRoute == 'cross-country') {
		taxesForJunior = taxesForJunior * 0.75;
		taxesForSenior = taxesForSenior * 0.75;
	}

	let taxesJunior = juniorBikers * taxesForJunior;
	let taxesSenior = seniorBikers * taxesForSenior;
	let taxesSum = taxesJunior + taxesSenior;

	let cost = taxesSum * 0.05;
	let leftMoney = (taxesSum - cost).toFixed(2);
	console.log(leftMoney);
}

bikeRace(['3', '40', 'trail']);
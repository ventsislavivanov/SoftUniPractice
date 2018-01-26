function friendlyTrip([km, costFuelPer100, priceFuel, budget]) {
	let costOnCar = km * costFuelPer100 / 100;
	let commonCost = costOnCar * priceFuel;

	if (budget >= commonCost) {
		console.log(`You can take a trip. ${(budget - commonCost).toFixed(2)} money left.`)
	} else {
		console.log(`Sorry, you cannot take a trip. Each will receive ${(budget / 5).toFixed(2)} money.`);
	}
}

friendlyTrip(['100', '8', '1.2', '20']);
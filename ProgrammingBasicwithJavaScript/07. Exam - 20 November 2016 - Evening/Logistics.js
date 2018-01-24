function logistics(arg) {
	let numbersCargo = Number(arg[0]);
	let allCargo = 0;

	let pricePerTonWithTrain = 0;
	let pricePerTonWithTruck = 0;
	let pricePerTonWithMicrobus = 0;

	let transportWithTrain = 0;
	let transportWithTruck = 0;
	let transportWithMicrobus = 0;

	for (let i = 1; i <= numbersCargo; i++) {
		let currentCargo = Number(arg[i]);
		allCargo += currentCargo;
		
		if (currentCargo >= 12) {
			transportWithTrain += currentCargo;
			pricePerTonWithTrain = 120;
		} else if (currentCargo > 3) {
			transportWithTruck += currentCargo;
			pricePerTonWithTruck = 175;
		} else {
			transportWithMicrobus += currentCargo;
			pricePerTonWithMicrobus = 200;
		}
	}

	let averagePerTon = ((transportWithTrain * pricePerTonWithTrain + transportWithTruck * pricePerTonWithTruck + transportWithMicrobus * pricePerTonWithMicrobus) / allCargo).toFixed(2);
	let percentWithMicrobus = (transportWithMicrobus / allCargo * 100).toFixed(2);
	let percentWithTruck = (transportWithTruck / allCargo * 100).toFixed(2);
	let percentWithTrain = (transportWithTrain / allCargo * 100).toFixed(2);

	console.log(averagePerTon);
	console.log(`${percentWithMicrobus}%`);
	console.log(`${percentWithTruck}%`);
	console.log(`${percentWithTrain}%`);
}

logistics(['4', '1', '5', '16', '3'])
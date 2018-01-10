function courierExpress([arg1, arg2, arg3]) {
	let weightOnPackage = parseFloat(arg1);
	let typeService = arg2;
	let distanceInKm = parseFloat(arg3);

	let priceForKm = 0;
	let priceForKg = 0;

	if (weightOnPackage >= 91 && weightOnPackage < 150) {
		priceForKm = 0.20;
	} else if (weightOnPackage >= 41 && weightOnPackage < 90) {
		priceForKm = 0.15;
	} else if (weightOnPackage >= 11 && weightOnPackage < 40) {
		priceForKm = 0.10;
	} else if (weightOnPackage >= 1 && weightOnPackage < 10) {
		priceForKm = 0.05;
	} else if (weightOnPackage < 1) {
		priceForKm = 0.03;
	}


	if (typeService == 'express' && weightOnPackage >= 91 && weightOnPackage < 150) {
		priceForKg = 0.20 * 0.01;
	} else if (typeService == 'express' && weightOnPackage >= 41 && weightOnPackage < 90) {
		priceForKg = 0.15 * 0.02;
	} else if (typeService == 'express' && weightOnPackage >= 11 && weightOnPackage < 40) {
		priceForKg = 0.10 * 0.05;
	} else if (typeService == 'express' && weightOnPackage >= 1 && weightOnPackage < 10) {
		priceForKg = 0.05 * 0.4;
	} else if (typeService == 'express' && weightOnPackage < 1) {
		priceForKg = 0.03 * 0.8;
	}

	let overcharge = priceForKg * weightOnPackage * distanceInKm;
	let priceForPackage = distanceInKm * priceForKm + overcharge;

	console.log(`The delivery of your shipment with weight of ${weightOnPackage.toFixed(3)} kg. would cost ${priceForPackage.toFixed(2)} lv.`)
}

// courierExpress(['1.5', "standart", '100']);
courierExpress(['87', "express", '130']);
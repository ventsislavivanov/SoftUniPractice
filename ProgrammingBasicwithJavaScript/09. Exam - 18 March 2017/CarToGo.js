function rentCar([arg1, arg2]) {
	let budget = parseFloat(arg1);
	let season = arg2;
 	let kindClass = '';
	let car = '';
	let price = 0;

	if (budget > 500) {
		kindClass = 'Luxury class';
	} else if (budget > 100 && budget <= 500) {
		kindClass = 'Compact class';
	} else if (budget <= 100) {
		kindClass = 'Economy class';
	}

	if (budget > 500) {
		car = 'Jeep'
		price = budget * 90 / 100;
	} else if (season == 'Summer' && budget > 100 && budget <= 500) {
		car = 'Cabrio';
		price = budget * 45 / 100;
	} else if (season == 'Winter' && budget > 100 && budget <= 500) {
		car = 'Jeep';
		price = budget * 80 / 100;
	} else if (season == 'Summer' && budget <= 100) {
		car = 'Cabrio';
		price = budget * 35 / 100;
	} else if (season == 'Winter' && budget <= 100) {
		car = 'Jeep';
		price = budget * 65 / 100;
	}

	console.log(`${kindClass}`);
	console.log(`${car} - ${price.toFixed(2)}`);
}

rentCar(['500', 'Summer']);
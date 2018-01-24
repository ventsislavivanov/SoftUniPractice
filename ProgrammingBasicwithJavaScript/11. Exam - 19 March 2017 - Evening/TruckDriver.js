function truckDriver([arg1, arg2]) {
	let season = arg1;
	let km = parseFloat(arg2);
	let price = 0;

	if (km > 10000 && km <= 20000) {
		price = 1.45;
	} else if (km > 5000 && (season == 'Spring' || season == 'Autumn')) {
	 	price = 0.95;
	} else if (km > 5000 && season == 'Summer') {
		price = 1.1;
	} else if (km > 5000 && season == 'Winter') {
		price = 1.25;
	} else if (km <= 5000 && (season == 'Spring' || season == 'Autumn')) {
		price = 0.75;
	} else if (km <= 5000 && season == 'Summer') {
		price = 0.9;
	} else if (km <= 5000 && season == 'Winter') {
		price = 1.05;
	}

	let selary = (km * price * 4) * 0.9;
	console.log(selary.toFixed(2));
}

truckDriver(['Summer', '3455'])
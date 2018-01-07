function flowers([arg1, arg2, arg3, arg4, arg5]) {
	let chrysanthemums = Number(arg1);
	let roses = Number(arg2);
	let tulips = Number(arg3);
	let season = arg4;
	let holiday = arg5;

	let chrysanthemumsPrice = 0;
	let rosesPrice = 0;
	let tulipsPrice = 0;

	if (season == 'Summer' || season == 'Spring') {
		chrysanthemumsPrice = 2;
		rosesPrice = 4.1;
		tulipsPrice = 2.5;
	} else if (season == 'Winter' || season == 'Autumn') {
		chrysanthemumsPrice = 3.75;
		rosesPrice = 4.5;
		tulipsPrice = 4.15;		
	}

	let allFlowers = chrysanthemums + roses + tulips;

	let price = chrysanthemums * chrysanthemumsPrice + roses * rosesPrice + tulips * tulipsPrice;

	if (holiday == 'Y') {
		price = price * 1.15;	 
	}
	
	if (tulips > 5 && season == 'Spring') {
		price = price * 0.95;
	} else if (roses >= 10 && season == 'Winter') {
		price = price * 0.9;
	}


	if (allFlowers > 20) {
		price = price * 0.8;
	}
	console.log((price + 2).toFixed(2));
}

flowers(['2',  '4', '8', 'Spring', 'Y']);
// flowers(['3', '10', '9', 'Winter', 'N']);
// flowers(['10', '10', '10', 'Autumn', 'N'])

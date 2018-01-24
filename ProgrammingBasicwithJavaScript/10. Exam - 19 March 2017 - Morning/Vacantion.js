function vacantion([arg1, arg2]) {
	let budget = parseFloat(arg1);
	let season = arg2;
	let price = 0;
	let location = '';
	let accommodation = '';

	if (budget > 3000 && season == 'Summer') {
		accommodation = 'Hotel';
		price = budget * 0.9;
		location = 'Alaska'
	} else if (budget > 3000 && season == 'Winter') {
		accommodation = 'Hotel';
		price = budget * 0.9;
		location = 'Morocco'
	} else if (budget > 1000 && season == 'Summer') {
		accommodation = 'Hut';
		price = budget * 0.8;
		location = 'Alaska'
	} else if (budget > 1000 && season == 'Winter') {
		accommodation = 'Hut';
		price = budget * 0.6;
		location = 'Morocco'
	} else if (budget <= 1000 && season == 'Summer') {
		accommodation = 'Camp';
		price = budget * 0.65;
		location = 'Alaska'
	} else if (budget <= 1000 && season == 'Winter') {
		accommodation = 'Camp';
		price = budget * 0.45;
		location = 'Morocco'
	}

	console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`)
}

vacantion(['3000', 'Winter']);
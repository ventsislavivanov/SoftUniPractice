function fruitCoctails([arg1, arg2, arg3]) {
	let fruit = arg1;
	let kindOfCoctails = arg2;
	let numberOfDrinks = Number(arg3);

	let priceForLiter = 0;

	if (kindOfCoctails == 'small' && fruit == 'Watermelon') {
		priceForLiter = 56;
	} else if (kindOfCoctails == 'small' && fruit == 'Mango') {
		priceForLiter = 36.66;
	} else if (kindOfCoctails == 'small' && fruit == 'Pineapple') {
		priceForLiter = 42.1;
	} else if (kindOfCoctails == 'small' && fruit == 'Raspberry') {
		priceForLiter = 20;
	} else if (kindOfCoctails == 'big' && fruit == 'Watermelon') {
		priceForLiter = 28.7;
	} else if (kindOfCoctails == 'big' && fruit == 'Mango') {
		priceForLiter = 19.6;
	} else if (kindOfCoctails == 'big' && fruit == 'Pineapple') {
		priceForLiter = 24.8;
	} else if (kindOfCoctails == 'big' && fruit == 'Raspberry') {
		priceForLiter = 15.2;
	} 

	if (kindOfCoctails == 'small') {
		liter = 2;
	} else if (kindOfCoctails == 'big') {
		liter = 5;
	}

	priceForOrderCoctails = priceForLiter * liter * numberOfDrinks;
	
	if (priceForOrderCoctails > 1000) {
		priceForOrderCoctails = priceForOrderCoctails * 0.5;
	} else if (priceForOrderCoctails >= 400) {
		priceForOrderCoctails = priceForOrderCoctails * 0.85;
	}

	console.log(`${priceForOrderCoctails.toFixed(2)} lv.`);
}


fruitCoctails(['Watermelon', 'big', '4']);

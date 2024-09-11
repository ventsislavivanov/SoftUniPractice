function store([arg1, arg2, arg3]) {
	let productName = arg1;
	let townName = arg2;
	let quantity = parseFloat(arg3);

	if (townName == 'Sofia') {
		if (productName == 'coffee') {
			console.log(quantity * 0.50);
		} else if (productName == 'water') {
			console.log(quantity * 0.80);
		} else if (productName == 'beer') {
			console.log(quantity * 1.20);
		} else if (productName == 'sweets') {
			console.log(quantity * 1.45);
		} else if (productName == 'peanuts') {
			console.log(quantity * 1.60);
		}
	} else if (townName == 'Plovdiv'){
		if (productName == 'coffee') {
			console.log(quantity * 0.40);
		} else if (productName == 'water') {
			console.log(quantity * 0.70);
		} else if (productName == 'beer') {
			console.log(quantity * 1.15);
		} else if (productName == 'sweets') {
			console.log(quantity * 1.30);
		} else if (productName == 'peanuts') {
			console.log(quantity * 1.50);
		}
	} else if (townName == 'Varna') {
		if (productName == 'coffee') {
			console.log(quantity * 0.45);
		} else if (productName == 'water') {
			console.log(quantity * 0.70);
		} else if (productName == 'beer') {
			console.log(quantity * 1.10);
		} else if (productName == 'sweets') {
			console.log(quantity * 1.35);
		} else if (productName == 'peanuts') {
			console.log(quantity * 1.55);
		}
	}
}

store(['beer', 'Sofia', '6'])
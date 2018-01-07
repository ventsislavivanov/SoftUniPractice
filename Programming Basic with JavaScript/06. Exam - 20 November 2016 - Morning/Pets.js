function pets([arg1, arg2, arg3, arg4, arg5]) {
	let days = Number(arg1);
	let foodInKg = Number(arg2);
	let foodForDogInKg = parseFloat(arg3);
	let foodForCatInKg = parseFloat(arg4);
	let foodForTortoiseInGr = parseFloat(arg5);


	let needFood = days * foodForDogInKg + days * foodForCatInKg + days * foodForTortoiseInGr / 1000

	let leftFood = foodInKg - needFood;
	
	if (foodInKg >= needFood) {
		leftFood = Math.floor(leftFood);
		console.log(`${leftFood} kilos of food left.`);
	} else {
		leftFood = Math.ceil(Math.abs(leftFood));
		console.log(`${leftFood} more kilos of food are needed.`);
	}
}


pets(['2', '10',  '1', '1', '1200']);


pets(['5', '10', '2.1', '0.8', '321']);

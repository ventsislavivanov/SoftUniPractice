function deerOfSanta([arg1, arg2, arg3, arg4, arg5]) {
	let daysWithoutSanta = Number(arg1);
	let foodInKg = parseFloat(arg2);
	let foodPerDayForFirstDeer = parseFloat(arg3);
	let foodPerDayForSecondDeer = parseFloat(arg4);
	let foodPerDayForThirdDeer = parseFloat(arg5);


	let neededFood = daysWithoutSanta * foodPerDayForFirstDeer + daysWithoutSanta * foodPerDayForSecondDeer + daysWithoutSanta * foodPerDayForThirdDeer;

	if (foodInKg > neededFood) {
		console.log(`${Math.floor(foodInKg - neededFood)} kilos of food left.`);
	} else {
		console.log(`${Math.ceil(neededFood - foodInKg)} more kilos of food are needed.`);
	}
}

deerOfSanta(['2', '10', '1', '1', '2']);
deerOfSanta(['5', '10', '2.1', '0.8', '11']);
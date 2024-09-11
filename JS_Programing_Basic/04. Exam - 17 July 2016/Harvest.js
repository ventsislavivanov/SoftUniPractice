function harvest([arg1, arg2, arg3, arg4]) {
	let vineyard = Number(arg1);
	let grape = parseFloat(arg2);
	let needLWine = Number(arg3);
	let numbersWorker = Number(arg4);

	let harvest = vineyard * grape;
	let harvestForWine = harvest * 0.4;
	let producedWine = harvestForWine / 2.5;

	if (producedWine < needLWine) {
		let lacingWind = Math.floor(needLWine - producedWine);
		console.log(`It will be a tough winter! More ${lacingWind} liters wine needed.`);
	} else if (producedWine >= needLWine) {
		let leftWine = Math.ceil(producedWine - needLWine);
		let wineForWorker = Math.ceil(leftWine / numbersWorker);
		producedWine = Math.floor(producedWine);
		console.log(`Good harvest this year! Total wine: ${producedWine} liters.`);
		console.log(`${leftWine} liters left -> ${wineForWorker} liters per person.`);
	}
}

harvest(['650', '2', '175', '3']);
harvest(['1020', '1.5', '425', '4']);

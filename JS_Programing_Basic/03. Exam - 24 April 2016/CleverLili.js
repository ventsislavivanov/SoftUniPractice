function cleverLili([arg1, arg2, arg3]) {
	let years = Number(arg1);
	let priceOnWashingMashine = parseFloat(arg2);
	let priceOnToy = Number(arg3);
	let counter = 0;
	let total = 0;
	let sellMoney = 0;
	let saveMoney = 0;
	for (let i = 1; i <= years; i++) {
		if ( i % 2 == 0) {
			counter++
			priceGift = counter *  10;
			total += priceGift;
		}
	}
	total = total - counter;
	if (years % 2 == 0) {
		sellMoney = priceOnToy * counter;
	} else {
		sellMoney = priceOnToy * (counter + 1);
	}
	saveMoney = total + sellMoney;
	if (saveMoney >= priceOnWashingMashine) {
		different = (saveMoney - priceOnWashingMashine).toFixed(2);
		console.log(`Yes! ${different}`);
	} else {
		different = (priceOnWashingMashine - saveMoney).toFixed(2);
		console.log(`No! ${different}`);
	}
}

cleverLili(['21', '1570.98', '3']);
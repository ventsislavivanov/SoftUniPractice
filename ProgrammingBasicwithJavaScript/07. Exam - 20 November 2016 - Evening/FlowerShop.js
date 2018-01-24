function flowerShop([arg1, arg2, arg3, arg4, arg5]) {
	let numberMagnolias = Number(arg1);
	let numberHyacinths = Number(arg2);
	let numberRoses = Number(arg3);
	let numberCacti = Number(arg4);
	let priceOfGift = parseFloat(arg5);

	let priceMagnolias = 3.25;
	let priceHyacinths = 4;
	let priceRoses = 3.5;
	let priceCacti = 8;

	let sum = parseFloat((numberMagnolias * priceMagnolias) + (numberHyacinths * priceHyacinths) + (numberRoses * priceRoses) + (numberCacti * priceCacti));
	let tax = sum * 0.05;
	let profit = sum - tax;

	if (profit >= priceOfGift) {
		console.log(`She is left with ${Math.floor(profit - priceOfGift)} leva.`);
	} else {
		console.log(`She will have to borrow ${Math.ceil(priceOfGift - profit)} leva.`);
	}
}

flowerShop(['2',  '3', '5',  '1', '50']);

flowerShop(['15', '7',  '5', '10', '100']);

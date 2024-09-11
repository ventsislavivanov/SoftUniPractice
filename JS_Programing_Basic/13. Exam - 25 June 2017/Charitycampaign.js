function charityCampaign([arg1, arg2, arg3, arg4, arg5]) {
	let days = Number(arg1);
	let confectioners = Number(arg2);
	let cake = Number(arg3);
	let waffles = Number(arg4);
	let pancake = Number(arg5);

	let priceCake = 45;
	let priceWaffles = 5.8;
	let pricePancake = 3.2;

	let sum = ((cake * priceCake + waffles * priceWaffles + pancake * pricePancake) * confectioners) * days;
	let sumWithoutCosts = sum - sum / 8;

	console.log(sumWithoutCosts.toFixed(2));
}

//charityCampaign(['20', '8', '14', '30', '16']);
charityCampaign(['131', '5', '9', '33', '46']);

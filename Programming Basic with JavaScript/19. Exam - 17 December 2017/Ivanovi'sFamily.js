function family([arg1, arg2, arg3, arg4]) {
	let budget = parseFloat(arg1);
	let priceForGiftFirst = parseFloat(arg2);
	let priceForGiftSecond = parseFloat(arg3);
	let priceForGiftThird = parseFloat(arg4);

	let allPriceForGift = priceForGiftFirst + priceForGiftSecond + priceForGiftThird;
	let donation = (budget - allPriceForGift) * 0.9;
	console.log(donation.toFixed(2));
}

family(['50', '10', '12', '13']);
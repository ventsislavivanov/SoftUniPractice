function toyShop([arg1, arg2, arg3, arg4, arg5, arg6]) {
	let priceHoliday = parseFloat(arg1);
	let pusels = Number(arg2);
	let dolls = Number(arg3);
	let bears = Number(arg4);
	let minions = Number(arg5);
	let truck = Number(arg6);

	let sum = pusels * 2.6 + dolls * 3 + bears * 4.1 + truck * 2 + minions * 8.2;
	let numbersToys = pusels + dolls + bears + truck + minions;
	if (numbersToys >= 50) {
		sum = sum * 0.75;
	}

	let shop = sum * 0.9;
	let different = sum - priceHoliday;


	if (shop >= priceHoliday) {
		console.log(`Yes! ${(shop - priceHoliday).toFixed(2)} lv left.`);
	} else {
		console.log(`Not enough money! ${(priceHoliday - shop).toFixed(2)} lv needed.`);
	}
}

toyShop(['40.8', '20', '25', '30',  '50', '10',]);
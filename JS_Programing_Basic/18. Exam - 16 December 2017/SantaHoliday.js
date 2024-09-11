function santaHoliday([arg1, arg2, arg3]) {
	let days = Number(arg1);
	let kindRoom = arg2;
	let evaluation = arg3;

	let numberOvernights = days - 1;
	let priceForOvernights = 0;

	if (kindRoom == 'room for one person') {
		priceForOvernights = 18;
	} else if (kindRoom == 'apartment') {
		priceForOvernights = 25;
	} else if (kindRoom == 'president apartment') {
		priceForOvernights = 35;
	}

	let priceForAllOvernights = priceForOvernights * numberOvernights;

	if (days > 15 && kindRoom == 'president apartment') {
		priceForAllOvernights = priceForAllOvernights * 0.8;
	} else if (days > 15 && kindRoom == 'apartment') {
		priceForAllOvernights = priceForAllOvernights * 0.5;
	} else if (days > 10 && kindRoom == 'president apartment') {
		priceForAllOvernights = priceForAllOvernights * 0.85;
	} else if (days > 10 && kindRoom == 'apartment') {
		priceForAllOvernights = priceForAllOvernights * 0.65;
	}

	if (evaluation == 'positive') {
		priceForAllOvernights = priceForAllOvernights * 1.25;
	} else if (evaluation == 'negative') {
		priceForAllOvernights = priceForAllOvernights * 0.9;
	}
	console.log(priceForAllOvernights.toFixed(2));
}

santaHoliday(['11', 'apartment', 'positive']);
santaHoliday(['30', 'president apartment', 'negative']);
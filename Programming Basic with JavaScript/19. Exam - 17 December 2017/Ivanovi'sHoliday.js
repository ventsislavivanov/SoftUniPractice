function holiday([arg1, arg2, arg3]) {
	let overnights = Number(arg1);
	let kindDestination = arg2;
	let kindTransport = arg3;

	let priceNightAdult = 0;
	let priceNightChild = 0;

	let priceTransportAdult = 0;
	let priceTransportChild = 0;

	if (kindDestination == "Miami" && overnights > 15) {
		priceNightAdult = 20.00;
		priceNightChild = 10.00;
	} else if (kindDestination == "Miami" && overnights > 10) {
		priceNightAdult = 22.99;
		priceNightChild = 11.99;
	} else if (kindDestination == "Miami" && overnights >= 1 && overnights <= 10) {
		priceNightAdult = 24.99;
		priceNightChild = 14.99;
	} else if(kindDestination == "Canary Islands" && overnights > 15) {
		priceNightAdult = 28.00;
		priceNightChild = 22.00;
	}  else if(kindDestination == "Canary Islands" && overnights > 10) {
		priceNightAdult = 30.50;
		priceNightChild = 25.60;
	} else if (kindDestination == "Canary Islands" && overnights >= 1 && overnights <= 10) {
		priceNightAdult = 32.50;
		priceNightChild = 28.50;
	} else if (kindDestination == "Philippines" && overnights > 15) {
		priceNightAdult = 38.50;
		priceNightChild = 32.40;
	}  else if (kindDestination == "Philippines" && overnights > 10) {
		priceNightAdult = 41.00;
		priceNightChild = 36.00;
	} else if (kindDestination == "Philippines" && overnights >= 1 && overnights <= 10) {
		priceNightAdult = 42.99;
		priceNightChild = 39.99;
	}


	if (kindTransport == "train"){
		priceTransportAdult = 22.30;
		priceTransportChild = 12.50;
	} else if (kindTransport == "bus") {
		priceTransportAdult = 45.00;
		priceTransportChild = 37.00;
	} else if (kindTransport == "airplane") {
		priceTransportAdult = 90.00;
		priceTransportChild = 68.50;
	}

	let costForOvernights = overnights * (priceNightAdult * 2 + priceNightChild * 3) +
	(overnights * (priceNightAdult * 2 + priceNightChild * 3)) * 0.25;

	let costForTransport = (priceTransportAdult * 2) + (priceTransportChild * 3);

	let allCostForHoliday = costForOvernights + costForTransport;

	console.log(allCostForHoliday.toFixed(3));
}

holiday(['10', 'Miami', 'airplane'])
holiday(['5', 'Philippines', 'train'])
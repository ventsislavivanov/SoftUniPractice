function vacantion([arg1, arg2, arg3, arg4]) {
	let adult = Number(arg1);
	let students = Number(arg2);
	let nightStays = Number(arg3);
	let kindTranspoert = arg4;
	let priceForAdult = 0;
	let priceForStudents = 0;

	let group = adult + students;
	


	if (kindTranspoert == "train") {
		priceForAdult = 24.99;
		priceForStudents = 14.99;
	} else if (kindTranspoert == "bus") {
		priceForAdult = 32.50;
		priceForStudents = 28.50;
	} else if (kindTranspoert == "boat") {
		priceForAdult = 42.99;
		priceForStudents = 39.99;
	} else if (kindTranspoert == "airplane") {
		priceForAdult = 70.00;
		priceForStudents = 50.00;
	}

	let costForTransport = (adult * priceForAdult + students * priceForStudents) * 2;

	if (group >= 50 && kindTranspoert == "train") {
		costForTransport = costForTransport * 0.5;
	}

	let hotel = nightStays * 82.99;
	let taxes = (hotel + costForTransport) * 0.1;

	let allSum = (hotel + taxes + costForTransport).toFixed(2);

	console.log(allSum);
}

vacantion(['10', '5', '7', 'airplane']);
vacantion(['10', '5', '7', 'train']);
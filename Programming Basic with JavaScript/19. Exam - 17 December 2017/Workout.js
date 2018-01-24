function workout(args) {
	let numberDays = Number(args[0]);
	let kmRunedFirstDay = parseFloat(args[1]);

	let newKm = kmRunedFirstDay;
	let totalKm = kmRunedFirstDay;

	for (let i = 2; i < args.length; i++) {
		let currenPercent = Number(args[i]);

		newKm = kmRunedFirstDay * currenPercent / 100;
		kmRunedFirstDay += newKm;
		totalKm += kmRunedFirstDay;
	}

	

	if (totalKm >= 1000) {
		console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`);
	} else {
		console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`);
	}
}

// workout(['5', '30', '10',  '15', '20',  '5', '12']);
workout(['4', '100', '30',  '50',  '60',  '80']);




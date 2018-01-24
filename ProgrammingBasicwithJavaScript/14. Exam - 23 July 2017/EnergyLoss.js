function energyLoss(args) {
	let daysForTraining = Number(args[0]);
	let numbersOfDancer = Number(args[1]);
	let energyCostForCurrentDay = 0;
	let totalEnergyCost = 0;
	let totalEnergy = numbersOfDancer * 100 * daysForTraining;

	for (let i = 2; i < args.length; i++) {
		let currentDay = i - 1;
		let numberOfTraingHours = Number(args[i]);

		if (currentDay % 2 == 0 && numberOfTraingHours % 2 ==0) {
			energyCostForCurrentDay = 68;
		} else if (currentDay % 2 != 0 && numberOfTraingHours % 2 ==0) {
			energyCostForCurrentDay = 49;
		} else if (currentDay % 2 == 0 && numberOfTraingHours % 2 !=0) {
			energyCostForCurrentDay = 65;
		} else if (currentDay % 2 != 0 && numberOfTraingHours % 2 !=0) {
			energyCostForCurrentDay = 30;
		}

		let totalPercentForEnergyCost = numbersOfDancer * energyCostForCurrentDay;
		totalEnergyCost += totalPercentForEnergyCost
	}

	let totalRemainingEnergy = totalEnergy - totalEnergyCost;
	let remainingEnergyPerDancer = (totalRemainingEnergy / numbersOfDancer / daysForTraining).toFixed(2);

	if (remainingEnergyPerDancer >= 50) {
		console.log(`They feel good! Energy left: ${remainingEnergyPerDancer}`);
	} else {
		console.log(`They are wasted! Energy left: ${remainingEnergyPerDancer}`);
	}
}


energyLoss(["4", "10", "5", "8", "2", "3"]);
energyLoss(["4", "10", "1", "1", "1", "1"]);
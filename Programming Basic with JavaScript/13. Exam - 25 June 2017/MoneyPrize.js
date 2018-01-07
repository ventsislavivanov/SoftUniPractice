function moneyPrize(arg) {
	let partsOfProject = Number(arg[0]);
	let prizeForOnePoint = parseFloat(arg[1])
	let points = 0;
	let allPoints = 0
	for (let i = 2; i <= partsOfProject + 1; i++) {
		points = Number(arg[i]);
		
		
		if (i % 2 != 0) {
			points = points * 2;
		}

		allPoints += points; 
	}

	let totalPrize = allPoints * prizeForOnePoint;
	console.log(`The project prize was ${totalPrize.toFixed(2)} lv.`);
}

moneyPrize(['7', '100.5', '2', '4', '5', '1', '1', '7', '3']);
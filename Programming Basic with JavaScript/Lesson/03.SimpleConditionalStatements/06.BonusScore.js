function bonusScore([arg1]) {
	let num = Number(arg1);
	let bonusPoints = 0;
	if (num > 1000){
		bonusPoints = num * 0.10;
	} else if (num > 100){
		bonusPoints = num * 0.2
	} else {
		bonusPoints = 5;
	}

	if (num % 2 == 0) {
		bonusPoints += 1;
	} else if (num % 10 == 5) {
		bonusPoints += 2
	}

	console.log(bonusPoints);
	console.log(num + bonusPoints);
}

bonusScore(["175"]);
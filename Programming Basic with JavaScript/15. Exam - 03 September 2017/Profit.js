function profit([arg1, arg2, arg3, arg4]) {
	let numberOfOneCoins = Number(arg1);
	let numberOfTwoCoins = Number(arg2);
	let numberOfFiveBanknote = Number(arg3);
	let sum = Number(arg4);


	for (let i = 0; i <= numberOfOneCoins; i++) {
		for (let j = 0; j <= numberOfTwoCoins; j++) {
			for (let h = 0; h <= numberOfFiveBanknote; h++) {

				
				if (i * 1 + j * 2 + h * 5 == sum) {
					console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${h} * 5 lv. = ${sum} lv.`);
				}
			}
		}
	}

}

// profit(['3', '2', '3', '10']);
profit(['5', '3', '1', '7']);
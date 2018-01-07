function backToThePast([arg1, arg2]) {
	let inheritedMoney = parseFloat(arg1);
	let yearsOfLive = Number(arg2);
	let counter = 0;
	let evenYearsMoney = 0;
	let oddYearsMoney = 0;

	for (let i = 1800; i <= yearsOfLive; i++) {
		if (i % 2 == 0) {
			evenYearsMoney += 12000;
		} else {
			counter += 2;
			oddYearsMoney += (12000 + (17 + counter) * 50)
		}
	}
	let spendMoney = evenYearsMoney + oddYearsMoney;

	if (inheritedMoney >= spendMoney) {
		console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney - spendMoney).toFixed(2)} dollars left.`)
	} else {
		console.log(`He will need ${(spendMoney - inheritedMoney).toFixed(2)} dollars to survive.`);
	}
}

//backToThePast(['50000', '1802']);
backToThePast(['100000.15', '1808']);

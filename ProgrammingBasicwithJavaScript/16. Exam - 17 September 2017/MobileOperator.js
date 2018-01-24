function mobileOperator([arg1, arg2, arg3, arg4]) {
	let termOFContract = arg1;
	let typeContract = arg2;
	let internet = arg3;
	let numberMonthsForPay = Number(arg4);

	let taxesPerMonth = 0;

	if (termOFContract == 'one' && typeContract == 'Small') {
		taxesPerMonth = 9.98;
	} else if (termOFContract == 'one' && typeContract == 'Middle') {
		taxesPerMonth = 18.99;
	} else if (termOFContract == 'one' && typeContract == 'Large') {
		taxesPerMonth = 25.98;
	} else if (termOFContract == 'one' && typeContract == 'ExtraLarge') {
		taxesPerMonth = 35.99;
	} else if (termOFContract == 'two' && typeContract == 'Small') {
		taxesPerMonth = 8.58;
	} else if (termOFContract == 'two' && typeContract == 'Middle') {
		taxesPerMonth = 17.09;
	} else if (termOFContract == 'two' && typeContract == 'Large') {
		taxesPerMonth = 23.59;
	} else if (termOFContract == 'two' && typeContract == 'ExtraLarge') {
		taxesPerMonth = 31.79;
	}

	if (internet == 'yes' && taxesPerMonth > 30) {
		taxesPerMonth = taxesPerMonth + 3.85;
	} else if (internet == 'yes' && taxesPerMonth > 10) {
		taxesPerMonth = taxesPerMonth + 4.35;
	} else if (internet == 'yes' && taxesPerMonth <= 10) {
		taxesPerMonth = taxesPerMonth + 5.5;
	}

	let allTaxes = taxesPerMonth * numberMonthsForPay;

	if (termOFContract == 'two') {
		allTaxes = allTaxes * 0.9625;
	}

	console.log(`${allTaxes.toFixed(2)} lv.`);
}

// mobileOperator(['one', 'Small', 'yes', '10']);
mobileOperator(['two', 'Large', 'no', '10']);
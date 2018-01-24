function profit([arg1, arg2, arg3]) {
	let workDayInMonth = Number(arg1);
	let averegeUsdPerDay = parseFloat(arg2);
	let usdToBGN = parseFloat(arg3);

	let mountlyProfit = workDayInMonth * averegeUsdPerDay;
	let yearlyProfit = 12 * mountlyProfit + mountlyProfit * 2.5;
	let taxes = yearlyProfit * 0.25;
	let realYearlyProfitInBgn = (yearlyProfit - taxes) * usdToBGN;
	let averegeProfitPerDay = (realYearlyProfitInBgn / 365).toFixed(2);

	console.log(averegeProfitPerDay);
}

profit(["21", "75.00", "1.59"]);
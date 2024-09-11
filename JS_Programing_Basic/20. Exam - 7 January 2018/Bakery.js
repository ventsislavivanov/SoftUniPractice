function bakary([arg1, arg2, arg3, arg4, arg5]) {
	let dough = Number(arg1);
	let gBreadProducts = Number(arg2);
	let priceBreadProducts = parseFloat(arg3);
	let numberBreadProducts = Number(arg4);
	let numberPastery = Number(arg5);

	let dailyIncome = numberBreadProducts * priceBreadProducts;
	let needDough = gBreadProducts * numberBreadProducts;
	let leftDough = dough - needDough;
	let pricePastry = priceBreadProducts * 1.25;
	let gDoughPastry = gBreadProducts * 0.8;
	let usedDoughForPastery = gDoughPastry * numberPastery;
	let incomeNight = numberPastery * pricePastry;
	let costForProduced = (dough + needDough) / 1000 * 4;
	let selary = dailyIncome + incomeNight - costForProduced
	let allDough = usedDoughForPastery + needDough;

	console.log(`Pure income: ${selary.toFixed(2)} lv.`);
	console.log(`Dough used: ${Math.round(allDough)} g.`);
}

bakary(['10000', '200', '2.50', '40', '45']);
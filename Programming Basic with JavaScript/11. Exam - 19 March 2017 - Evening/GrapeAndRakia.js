function grapeAndRakia([arg1, arg2, arg3]) {
	let areaVineyard = parseFloat(arg1);
	let kgOfDecare = parseFloat(arg2);
	let waste = parseFloat(arg3);
	let grape = areaVineyard * kgOfDecare - waste;
	let rakia = grape * 0.45 / 7.5; 
	let rakiaProfit = rakia * 9.8;
	let grapeProfit = grape * 0.55 * 1.5;

	console.log(rakiaProfit.toFixed(2));
	console.log(grapeProfit.toFixed(2));
}

grapeAndRakia(['400', '10', '200']);
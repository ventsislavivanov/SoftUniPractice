function styrofoam([arg1, arg2, arg3, arg4, arg5]) {
	let budget = parseFloat(arg1);
	let areaHouse = parseFloat(arg2);
	let numberWindow = Number(arg3);
	let areaStyrofoamInOnePackage = parseFloat(arg4);
	let priceOfOnePackageStyrofoam = parseFloat(arg5);

	let areaHouseWithoutWindows = (areaHouse - numberWindow * 2.4) * 1.1; 
	let neededPackage = Math.ceil(areaHouseWithoutWindows / areaStyrofoamInOnePackage);
	let priceOfAllPackage = neededPackage * priceOfOnePackageStyrofoam;


	if (budget >= priceOfAllPackage) {
		console.log(`Spent: ${priceOfAllPackage.toFixed(2)}`);
		console.log(`Left: ${(budget - priceOfAllPackage).toFixed(2)}`);
	} else {
		console.log(`Need more: ${(priceOfAllPackage - budget).toFixed(2)}`);
	}
}

// styrofoam(['500', '200', '5', '20', '30']);
styrofoam(['190.9', '250.50', '2', '24.6', '32.60']);
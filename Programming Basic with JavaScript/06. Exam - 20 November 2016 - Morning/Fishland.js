function fishland([arg1, arg2, arg3, arg4, arg5]) {
	let priceMackerel = parseFloat(arg1);
	let priceSprat = parseFloat(arg2);
	let kgPalmwood = parseFloat(arg3);
	let kgHorseMackerel = parseFloat(arg4);
	let kgShellfish = Number(arg5);

	let sumOnAllFishProducts = (priceMackerel * 1.6 * kgPalmwood + priceSprat * 1.8 * kgHorseMackerel + kgShellfish * 7.5).toFixed(2)

	console.log(sumOnAllFishProducts);
}

fishland(['6.90', '4.20', '1.5', '2.5', '1']);
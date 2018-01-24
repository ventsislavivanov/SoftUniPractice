function trade([arg1, arg2, arg3, arg4]) {
	let priceV = parseFloat(arg1);
	let priceF = parseFloat(arg2);
	let kgV = Number(arg3);
	let kgF = Number(arg4);

	let result = (priceV * kgV + priceF * kgF) / 1.94;
	console.log(result);
}

trade(["0.194", "19.4", "10", "10"])
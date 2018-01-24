function christmasPrepartaion([arg1, arg2, arg3, arg4]) {
	let paper = Number(arg1);
	let fabric = Number(arg2);
	let glueInL = parseFloat(arg3);
	let discount = Number(arg4);

	let allMaterials = paper * 5.8 + fabric * 7.2 + glueInL * 1.2;
	let priceAfterDicount = allMaterials - allMaterials * discount / 100;
	console.log(priceAfterDicount.toFixed(3));
}

christmasPrepartaion(['4', '2', '5', '13']);
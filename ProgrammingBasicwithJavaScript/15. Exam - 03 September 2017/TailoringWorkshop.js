function tailoringWorkshop([arg1, arg2, arg3]) {
	let numberRectangleTable = Number(arg1);
	let lengthRectangleTable = parseFloat(arg2);
	let widthRectangleTable = parseFloat(arg3);

	let areaCovers = numberRectangleTable * (lengthRectangleTable + 2 * 0.3) * (widthRectangleTable + 2 * 0.3);
	let areaCarriages = numberRectangleTable * (lengthRectangleTable / 2) * (lengthRectangleTable / 2)

	let priceUsd = areaCovers * 7 +areaCarriages * 9;
	let priceBgn = priceUsd * 1.85;
	console.log(`${priceUsd.toFixed(2)} USD`);
	console.log(`${priceBgn.toFixed(2)} BGN`);
}

tailoringWorkshop(['5', '1.00', '0.50']);
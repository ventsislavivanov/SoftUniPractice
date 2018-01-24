function housePainting([arg1, arg2, arg3]) {
	let heightHouse = parseFloat(arg1);
	let lenghtHouse = parseFloat(arg2);
	let heightRoof = parseFloat(arg3);

	let bigSides = lenghtHouse * heightHouse * 2;
	let windows = 1.5 * 1.5 * 2;
	let bigSidesWithoutWindows = bigSides - windows;
	let backSide = heightHouse * heightHouse;
	let frontSide = backSide - 1.2 * 2;
	let areaAllSides = frontSide + backSide + bigSidesWithoutWindows;
	let greenColor = areaAllSides / 3.4;
	let roofTriangle = 2 * (heightHouse * heightRoof) / 2 ;
	let roofRectangle = 2 * heightHouse * lenghtHouse;
	let areaRoof = roofRectangle + roofTriangle;
	let redColor = areaRoof / 4.3;
	console.log(greenColor.toFixed(2));
	console.log(redColor.toFixed(2));
}

housePainting(['6', '10', '5.2']);
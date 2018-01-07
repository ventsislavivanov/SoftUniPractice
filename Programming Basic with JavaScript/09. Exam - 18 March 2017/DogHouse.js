function dogHouse([arg1, arg2]) {
	let sideOfHouse = parseFloat(arg1);
	let heightOfHouse = parseFloat(arg2);


	let	areaOnBigWalls = sideOfHouse * (sideOfHouse / 2) * 2;
	let backWall = (sideOfHouse / 2) *  (sideOfHouse / 2) + ((sideOfHouse / 2) * (heightOfHouse -sideOfHouse / 2)) / 2;
	let frontWall = backWall - (sideOfHouse / 5 * sideOfHouse / 5);
	let allAreaWall = areaOnBigWalls + backWall + frontWall;
	let greenColor = (allAreaWall / 3).toFixed(2);
	let roof = sideOfHouse * (sideOfHouse / 2) * 2;
	let redColor = (roof / 5).toFixed(2);

	console.log(greenColor);
	console.log(redColor);
}

dogHouse(['6', '10']);
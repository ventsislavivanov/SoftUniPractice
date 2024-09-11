function changeTiles([arg1, arg2, arg3, arg4, arg5, arg6, arg7]) {
	let savedMoney = parseFloat(arg1);
	let widthFloor = parseFloat(arg2);
	let lengthFloor = parseFloat(arg3);
	let sideOfTriangle = parseFloat(arg4);
	let heightOnTriangle = parseFloat(arg5);
	let priceForOneTile = parseFloat(arg6);
	let moneyForMasters = parseFloat(arg7);

	let areaFloor = widthFloor * lengthFloor;
	let areaTiles = sideOfTriangle * heightOnTriangle / 2;
	let neededTiles = Math.ceil(areaFloor / areaTiles) + 5;
	let allSum = neededTiles * priceForOneTile + moneyForMasters;


	if (savedMoney >= allSum) {
		console.log(`${(savedMoney - allSum).toFixed(2)} lv left.`);
	} else {
		console.log(`You'll need ${(allSum - savedMoney).toFixed(2)} lv more.`);
	}
}

changeTiles(['500', '3', '2.5', '0.5', '0.7', '7.80', '100']);
changeTiles([ '1000', '5.55', '8.95', '0.90', '0.85', '13.99', '321']);
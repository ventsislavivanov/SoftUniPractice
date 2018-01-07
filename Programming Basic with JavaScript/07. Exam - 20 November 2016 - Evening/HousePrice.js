function housePrice([arg1, arg2, arg3]) {
	let smallRoom = parseFloat(arg1);
	let kitchen = parseFloat(arg2);
	let pricePerSquareMeter = parseFloat(arg3);

	let bathroom = smallRoom / 2;
	let secondRoom = (smallRoom * 1.1);
	let thirdRoom = (secondRoom * 1.1);
	let totalArea = (smallRoom + secondRoom + thirdRoom + kitchen + bathroom) * 1.05;
	let price = (pricePerSquareMeter * totalArea).toFixed(2);
	console.log(price);
}

housePrice(['20',  '10', '699.99']);

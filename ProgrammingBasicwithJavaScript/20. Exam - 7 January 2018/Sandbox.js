function sandbox([arg1, arg2, arg3, arg4]) {
	let width = parseFloat(arg1);
	let length = parseFloat(arg2);
	let priceSandPerKg = parseFloat(arg3);
	let priceBoardPerKg = parseFloat(arg4);

	let lengthBoard = 0.2;

	let area = width * length;
	let areaSandbox = (width - 2 * 0.2) * (length - 2 * 0.2);
	let areaBoards = area - areaSandbox;

	let needSands = Math.ceil(areaSandbox * 20);
	let needBoards = Math.ceil(areaBoards / (2.2 * 0.2));

	let priceSand = needSands * priceSandPerKg;
	let priceBoard = needBoards * priceBoardPerKg;
	let totalPrice = priceSand + priceBoard;

	console.log(totalPrice.toFixed(2));
}

sandbox(['2', '3', '1', '2'])
sandbox(['1.2', '2.5', '1.7', '1.5'])
sandbox(['3', '3', '2.1', '2.3'])
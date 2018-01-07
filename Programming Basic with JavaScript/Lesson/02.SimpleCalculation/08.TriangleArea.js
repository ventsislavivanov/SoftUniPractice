function triangleArea([arg1, arg2]) {
	let side = parseFloat(arg1);
	let heightToSide = parseFloat(arg2);
	let area = side * heightToSide / 2;
	let fixedArea = area.toFixed(2);
	console.log(fixedArea);
}

triangleArea(["3", "2"]);
function rectangleAreaAndPerimeter([arg1, arg2, arg3, arg4]) {
	let x1 = parseFloat(arg1);
	let y1 = parseFloat(arg2);
	let x2 = parseFloat(arg3);
	let y2 = parseFloat(arg4);

	let sideX = Math.abs(x1 - x2);
	let sideY = Math.abs(y1 - y2);

	let area = sideX * sideY;
	let perimeter = 2 * sideX + 2 * sideY;

	console.log(area);
	console.log(perimeter);
}

rectangleAreaAndPerimeter(["600.25", "500.75", "100.50", "-200.50"]);
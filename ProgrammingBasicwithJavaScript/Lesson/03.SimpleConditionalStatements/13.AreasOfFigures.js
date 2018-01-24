function areasOfFigures([arg1, arg2, arg3]) {
	let kindOfFigure = arg1;
	let side = parseFloat(arg2);
	let height = parseFloat(arg3);
	let area = 0;

	if (kindOfFigure == "square") {
		area = side * side;
	} else if (kindOfFigure == "rectangle") {
		area = side * height;
	} else if (kindOfFigure == "circle") {
		area = Math.PI * side * side;
	} else if (kindOfFigure == "triangle") {
		area = side * height / 2;
	}
	
	console.log(area);
}

areasOfFigures(["rectangle","7", "2.5"]);
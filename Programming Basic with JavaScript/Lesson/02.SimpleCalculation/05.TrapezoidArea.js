function trapezoidArea([arg1, arg2, arg3]) {
	let smallSide = parseFloat(arg1);
	let bigSide = parseFloat(arg2);
	let height = parseFloat(arg3);
	let area = (smallSide + bigSide)/2* height;
	console.log(area);
}

trapezoidArea(["8", "13", "7"]);

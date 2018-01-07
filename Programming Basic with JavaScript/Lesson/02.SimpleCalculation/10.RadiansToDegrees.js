function radiansToDegrees([arg1]) {
	let radians = parseFloat(arg1);
	let degrees = Math.round((180 / Math.PI) * radians);
	console.log(degrees);
}

radiansToDegrees(["0.5236"]);
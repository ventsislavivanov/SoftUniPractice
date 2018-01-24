function celsiusToFahrenheight([arg1]) {
	let celsius = parseFloat(arg1);
	let fahrenheight = (parseFloat(celsius * 1.8 + 32)).toFixed(2);
	console.log(fahrenheight);
}


celsiusToFahrenheight(["32.3"]);
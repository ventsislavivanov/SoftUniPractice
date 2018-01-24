function usdToBGN([arg1]) {
	let usd = parseFloat(arg1);
	let dailyCourse = 1.79549;
	let bgn = (usd * dailyCourse).toFixed(2);
	console.log(bgn);
}

usdToBGN(["12.5"]);
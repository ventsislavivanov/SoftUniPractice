function squre([arg]) {
	let n = Number(arg);
	let result = "*";
	for (let row = 0; row < n; row++){
		for (let col = 0; col < n-1; col++){
			result += " *";
		}
		console.log(result);
		result = "*";
	}
}

squre(["3"]);
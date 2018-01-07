function squre([arg]) {
	let n = Number(arg);
	let result = "";
	for (let row = 1; row <= n; row++){
		for (let col = 1; col <= n; col++){
			result += "*";
		}
		console.log(result);
		result = "";
	}
}

squre(["3"]);
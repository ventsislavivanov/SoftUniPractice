function triangle([arg1]) {
	let n = Number(arg1);
	let result = "";

	for (let row = 1; row <= n; row++) {
		for (let col = 0; col < row; col++){
			result += "$ ";
		}
	console.log(result);
	result = ""
	}
}

triangle(["7"]);
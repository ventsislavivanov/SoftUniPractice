function rectangle([arg1, arg2]) {
	let a = Number(arg1);
	let b = Number(arg2);
	let result = ""
	for (row = 1; row <= a; row++) {
		for (col = 1; col <= b; col++){
			result += "*";
		}
		console.log(result);
		result = "";
	}
}

rectangle(["2", "8"])
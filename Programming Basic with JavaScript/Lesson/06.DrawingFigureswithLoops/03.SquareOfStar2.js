function square([arg]){
	let n = Number(arg);
	let result = "*"

	// add items in result
	for (i = 0; i < n - 1; i++) {
		result += " *";
	}
	// printing result
	for (i = 0; i < n; i++) {
		console.log(result);
	}
}

square("4");
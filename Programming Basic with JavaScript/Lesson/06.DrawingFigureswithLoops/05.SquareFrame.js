function frame([argument]) {
	let n = Number(argument);

	console.log("+ " + "- ".repeat(n - 2) + "+");
	for (i = 0; i < n - 2; i++) {
		console.log("| " + "- ".repeat(n - 2) + "|");
	}
	console.log("+ " + "- ".repeat(n - 2) + "+");
}


frame([3]);
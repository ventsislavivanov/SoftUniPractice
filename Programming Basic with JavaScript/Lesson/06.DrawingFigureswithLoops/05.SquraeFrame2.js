function frame(argument) {
	let n = Number(argument);

	for (i = 0; i < n; i++) {
		if (i == 0 || i == n - 1) {
			console.log("+ " + "- ".repeat(n - 2) + "+")
		} else {
			console.log("| " + "- ".repeat(n - 2) + "|")
		}
	}
}

frame("7");
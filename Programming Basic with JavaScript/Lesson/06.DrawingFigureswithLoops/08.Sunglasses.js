function sunglasses([args]) {
	let	n = Number(args);

	console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n))
	for(i = 1; i <= n - 2; i++) {
		if (i != Math.floor((n - 1) / 2)) {
			console.log("*" + "/".repeat((2 * n) -2) + "*" + " ".repeat(n) + "*" + "/".repeat((2 * n) -2) + "*"); 
		} else {
			console.log("*" + "/".repeat((2 * n) -2) + "*" + "|".repeat(n) + "*" + "/".repeat((2 * n) -2) + "*"); 
		}
	}
	console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n))
}

sunglasses(["3"]);
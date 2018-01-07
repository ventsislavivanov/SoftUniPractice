function butterfly([args]) {
	let n = Number(args);
	for (let i = 0; i < n - 2; i++) {
		if (i % 2 == 0) {
			console.log("*".repeat(n - 2) + "\\" + " " + "/" + "*".repeat(n - 2));
		} else {
			console.log("-".repeat(n - 2) + "\\" + " " + "/" + "-".repeat(n - 2));
		}
	}
	console.log(" ".repeat(n - 1) + "@");
	for (let i = 0; i < n - 2; i++) {
		if (i % 2 == 0) {
			console.log("*".repeat(n - 2) + "/" + " " + "\\" + "*".repeat(n - 2));
		} else {
			console.log("-".repeat(n - 2) + "/" + " " + "\\" + "-".repeat(n - 2));
		}
	}
}

butterfly(["9"]);
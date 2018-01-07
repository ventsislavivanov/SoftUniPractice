function squreOfStars([arg1]) {
	let	side = Number(arg1);

	console.log("*".repeat(side));
	for (var i = 0; i <= side-2; i++) {
		console.log("*" + " ".repeat(side-2) + "*");
	}
	console.log("*".repeat(side));
}

squreOfStars(["4"]);
function triangle([arg1]) {
	let n = Number(arg1);
	let result = "";

	for (let row = 1; row <= n; row++) {
		console.log("$ ".repeat(row));
	}
}

triangle(["7"]);
function triangle([arg1]) {
	let n = Number(arg1);
	let result = "";
	let counter = 0;

	for (let row = 1; row <= n; row++) {
		console.log("$ ".repeat(++counter));
	}
}

triangle(["2"]);
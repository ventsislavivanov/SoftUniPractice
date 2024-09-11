function rhombus([args]) {
	let n = Number(args);
	for (let i = 1; i <= n; i++) {
		console.log(" ".repeat(n - i) + "* ".repeat(i));
	}
	for (let i = n -1; i >= 1; i--) {
		console.log(" ".repeat(n - i) + "* ".repeat(i));
	}
}

rhombus(["3"])
function tree([args]) {
	let n = Number(args);
	for (i = 0; i <= n ; i++) {
		console.log(" ".repeat(n - i) + "*".repeat(i) + " | " + "*".repeat(i) + " ".repeat(n - i) )
	}

}

tree(["5"])
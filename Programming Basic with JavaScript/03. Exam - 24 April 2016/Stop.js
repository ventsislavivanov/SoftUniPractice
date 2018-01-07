function stop([arg]) {
	let n = Number(arg);
	let width = 4 * n + 3;
	console.log(
		".".repeat(n + 1) + 
		"_".repeat( 2 * n + 1) +
		".".repeat(n + 1) 
	);

	for(let i = 0; i < n; i++) {
		let outPoint = n - i;
		console.log(
			".".repeat(outPoint) +
			"//" +
			"_".repeat(width - 2 * outPoint - 4) +
			"\\\\" +
			".".repeat(outPoint)
		);
	}
	console.log(
		"//" + 
		"_".repeat((width - 5) / 2 - 2) + 
		"STOP!" +
		"_".repeat((width - 5) / 2 - 2)  + 
		"\\\\"
	);
	for(let i = n; i > 0; i--) {
		let outPoint = n - i;
		console.log(
			".".repeat(outPoint) +
			"\\\\" +
			"_".repeat(width - 2 * outPoint - 4) +
			"//" +
			".".repeat(outPoint)
		);
	}
}

stop(['6']);
function square([arg]){
	let n = Number(arg);

	for (i = 0; i < n - 1; i++) {
		console.log("* ".repeat(n));	

	}
}

square("4");
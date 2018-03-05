function triangleOfStars(num) {
	for (let i = 1; i <= num; i++) {
		print(i);
	}

	for (let i = num - 1; i >= 1; i--) {
		print(i);
	}

	function print(n) {
		console.log("*".repeat(n));
	}
}

triangleOfStars(4);
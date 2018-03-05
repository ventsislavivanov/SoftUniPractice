function squreOfStars(n) {
	function print(count = n) {
		console.log('* '.repeat(count).trim())
	}
	for (let i = 1; i <= n; i++) {
		print()
	}
}

squreOfStars();
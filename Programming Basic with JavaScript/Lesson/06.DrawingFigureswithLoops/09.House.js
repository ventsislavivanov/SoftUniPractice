function house([arg]) {
	let n = Number(arg);
	let starsCount = 1;
	if ( n % 2 == 0) {
		starsCount = 2;
	}
	//Draw top
	for (let i = 0; i < Math.ceil(n / 2); i++) {
		console.log("-".repeat((n - starsCount) / 2) + "*".repeat(starsCount) + "-".repeat((n - starsCount) / 2));
		starsCount += 2;
	}
	//Draw bottom
	for (let i = 0; i < Math.floor(n / 2); i++) {
		console.log("|" + "*". repeat(n - 2) + "|");
	}
}

house(["9"]);
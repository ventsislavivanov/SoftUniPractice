function diamond([arg]) {
	let n = Number(arg);
	let rowsCounter = n;
	let starsCount = 2 - n % 2;

	if (n % 2 == 0) {
		rowsCounter = n - 1;
	}	

	for ( let i = 0; i < Math.ceil(n / 2); i++) {
		if (i == 0) {
			console.log("-".repeat((n - starsCount) / 2 - i) + "*".repeat(starsCount) + "-".repeat((n - starsCount) / 2 - i));
		} else {
			console.log("-".repeat((n - starsCount) / 2 - i) + "*" + "-".repeat(starsCount + 2 * i - 1) + "*" + "-".repeat((n - starsCount) / 2 - i)  );
		}
	}

	for ( let i = Math.ceil(n / 2) - 1; i >= 0 ; i--) {
		if (i == 0) {
			console.log("-".repeat((n - starsCount) / 2 - i) + "*".repeat(starsCount) + "-".repeat((n - starsCount) / 2 - i));
		} else {
			console.log("-".repeat((n - starsCount) / 2 - i) + "*" + "-".repeat(starsCount + 2 * i - 1) + "*" + "-".repeat((n - starsCount) / 2 - i)  );
		}
	}

	

}

diamond(["8"]);
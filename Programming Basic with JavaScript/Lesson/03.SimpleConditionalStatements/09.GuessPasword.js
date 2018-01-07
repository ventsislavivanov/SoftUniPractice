function guessPassword([arg1]) {
	let check = arg1;
	if (check === "s3cr3t!P@ssw0rd") {
		console.log("Welcome")
	} else {
		console.log("Wrong password!");
	}
}

guessPassword(["s3cr3t!p@ss"])
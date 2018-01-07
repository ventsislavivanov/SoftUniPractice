function invalidNumber([arg1]) {
	let num = Number(arg1);

	if (num == 0 || (num >= 100 && num <= 200)) {
	} else {
		console.log("invalid")
	}
}

invalidNumber(["100"]);
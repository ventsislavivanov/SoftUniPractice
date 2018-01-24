function leftAndRightSum(args) {
	let n = Number(args[0]);
	let leftSum = 0;
	let rightSum = 0;

	// left sum
	for (i = 1; i <= n; i++) {
		leftSum += Number(args[i]);
	}
	// right sum

	for (i = n + 1; i <= 2 * n; i++) {
		rightSum += Number(args[i]);
	}

	if (leftSum == rightSum) {
		console.log("Yes, sum = " + leftSum);
	} else {
		console.log("No, diff = " + Math.abs(leftSum  - rightSum))
	}

}

leftAndRightSum(["2", "9", "90", "40", "60"]);
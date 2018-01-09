function threeBrother([arg1, arg2, arg3, arg4]) {
	let firstBrother = parseFloat(arg1);
	let secondtBrother = parseFloat(arg2);
	let thirdBrother = parseFloat(arg3);
	let timeForFishing = parseFloat(arg4);

	let totalTime = 1 / ((1/firstBrother) + (1/secondtBrother) + (1/thirdBrother));
	let timeWithBreak = totalTime * 1.15;
	let leftTime = timeForFishing - timeWithBreak;

	if (leftTime > 0) {
		console.log(`Cleaning time: ${timeWithBreak.toFixed(2)}`);
		console.log(`Yes, there is a surprise - time left -> ${Math.floor(leftTime)} hours.`);
	} else {
		console.log(`Cleaning time: ${timeWithBreak.toFixed(2)}`);
		console.log(`No, there isn't a surprise - shortage of time -> ${Math.abs(Math.floor(leftTime))} hours.`);
	}
}

// threeBrother(['3', '4', '5', '3.6']);
threeBrother(['3.2', '2.5', '1.24', '0.5']);
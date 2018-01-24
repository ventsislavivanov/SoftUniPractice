function maxCombination([arg1, arg2, arg3]) {
	let startDiget = Number(arg1);
	let endDigit = Number(arg2);
	let num = Number(arg3);

	let result = '';
	let counter = 0;

	for (let i = startDiget; i <= endDigit; i++) {
		for (let j = startDiget; j <= endDigit; j++) {
			if (counter == num) {
				break;
			}
			counter++
			result += `<${i}-${j}>`;
		}
	}

	console.log(result)
}

maxCombination(['69', '71', '100'])
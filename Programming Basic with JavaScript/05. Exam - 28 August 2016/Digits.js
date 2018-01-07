function digits([arg]) {
	let num = Number(arg);
	let firstDiget = Number(arg[0]);
	let secondDiget = Number(arg[1]);
	let thirdDiget = Number(arg[2]);
	let resultNum = '';

	let rows = firstDiget + secondDiget;
	let columns = firstDiget + thirdDiget;

	for (let i = 1; i <= rows; i++) {
		resultNum = '';
		for (let j = 1; j <= columns; j++) {
 			if (num % 5 == 0) {
 				num = num - firstDiget
			} else if (num % 3 == 0) {
				num = num - secondDiget
			} else {
				num = num + thirdDiget
			}
			
			resultNum += `${num} `;
 		}
		console.log(resultNum);
 	}
}

digits(['132']);

function numberGenerator([arg1, arg2, arg3, arg4, arg5]) {
	let m = Number(arg1);
	let n = Number(arg2);
	let l = Number(arg3);
	let specialNum = Number(arg4);
	let controlNum = Number(arg5);


	for (let i = m; i >= 1; i--) {
		for (let j = n; j >= 1; j--) {
			for (let h = l; h >= 1; h--) {
				let currentNum = `${i}${j}${h}`;

				if(currentNum % 3 == 0) {
					specialNum = specialNum + 5;
				} else if (currentNum % 5 == 0) {
					specialNum = specialNum - 2;
				} else if (currentNum % 2 == 0) {
					specialNum = specialNum * 2;
				} 


				if (specialNum >= controlNum) {
					console.log(`Yes! Control number was reached! Current special number is ${specialNum}.`)
					return;
				}
			}
		}
	}

	console.log(`No! ${specialNum} is the last reached special number.`);
}

numberGenerator(['9', '7', '3', '2', '44']);
//numberGenerator(['1', '1', '7', '1', '308']);


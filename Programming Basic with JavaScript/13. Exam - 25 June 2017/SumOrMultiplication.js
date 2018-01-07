function sumOrMultiplication(arg) {
	let n = Number(arg);
	let resultSum = '';
	let resultMultiplication = '';

	for (let a = 1; a <= 30; a++) {
		for (let b = 1; b <= 30; b++) {
			for (let c = 1; c <= 30; c++) {

				if (c > b && b > a && a + b + c == n) {
					resultSum = `${a} + ${b} + ${c} = ${n}`;
					console.log(`${resultSum}`);
				}

				if (a > b && b > c && a * b * c == n) {
					resultMultiplication = `${a} * ${b} * ${c} = ${n}`;
					console.log(`${resultMultiplication}`);
				} 
			}
		}		
	}

	if (resultSum == false && resultMultiplication == false ){
		console.log('No!');
    }
}

sumOrMultiplication(['93']);
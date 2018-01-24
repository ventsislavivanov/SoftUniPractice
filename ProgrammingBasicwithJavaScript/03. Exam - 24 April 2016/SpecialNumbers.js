function specialNumbers(arg1) {
	let n = Number(arg1);
	let result = '';
	for (let i = 1; i <= 9; i++) {
		for (let j = 1; j <= 9; j++) {
			for (let o = 1; o <= 9; o++) {
				for (let y = 1; y <= 9; y++) {
					if (n % i == 0 && n % j == 0 && n % o == 0 && n % y == 0) {
						result += `${i}${j}${o}${y} `;
					}
				}
			}
		}
	}
	console.log(result);
}


specialNumbers(['3']);
function song([arg]) {
	let m = Number(arg);
	let result = '';
	let count = 0;
	let combination = '';
	let password = '';

	for (let a = 1; a <= 9; a++) {
		for (let b = 1; b <= 9; b++) {
			for (let c = 1; c <= 9; c++) {
				for (let d = 1; d <= 9; d++) {
					result = `${a}${b}${c}${d} `
					
					if (a < b && c > d && a * b + c * d == m) {
						combination += result;
						count++

	console.log(combination)
						if (combination == '') {
							console.log('UU');
						}
						
						if (count == 4) {
							password = result;
							//console.log(password)
						} else {
							password = 'No!'
						}
					} 
				}
			}
		}
	}
	console.log(combination)
	console.log(`Password: ${password}`)
}

song(['139']);
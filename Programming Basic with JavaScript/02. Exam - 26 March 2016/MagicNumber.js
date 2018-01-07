function magicNumber([arg1]) {
	let num = Number.parseInt(arg1);
	let result = "";

	for (let i = 1; i <= 9; i++) {
		for (let j = 1; j <= 9; j++) {
			for (let u = 1; u <= 9; u++) {
				for (let y = 1; y <= 9; y++) {
					for (let h = 1; h <= 9; h++) {
						for (let t = 1; t <= 9; t++) {
							if (i * j * u * y * h * t == num) {
								result += `${i}${j}${u}${y}${h}${t} `  
							}
						}
					}
				}
			}
		}
	}
	console.log(result);
}
magicNumber(['531441'])
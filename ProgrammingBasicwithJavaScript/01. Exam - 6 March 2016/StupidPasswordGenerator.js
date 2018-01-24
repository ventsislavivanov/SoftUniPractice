function passwordGenerator([arg1, arg2]) {
	let n = Number(arg1);
	let l = Number(arg2);

	let result = "";

	for (let i = 1; i < n; i++) {
		let curretntI = i;
		for (let j = 1; j < n; j++) {
			let currentJ = j;
			for (let u = 97; u < 97 + l; u++) {
				let char1 = String.fromCharCode(u);
				for (y = 97; y < 97 + l; y++) {
					let char2 = String.fromCharCode(y);
					for (o = 1; o <= n; o++) {
						let currentOnum = o;
						if (currentOnum > curretntI && currentOnum > currentJ) {
							result += `${i}${j}${char1}${char2}${o} `;
						}
					}
				}
			}
		}
	}
	console.log(result);
}

passwordGenerator(["3" , "2"])
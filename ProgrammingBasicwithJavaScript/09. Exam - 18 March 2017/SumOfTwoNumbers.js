function sumOfTwo([arg1, arg2, arg3]) {
	let startInterval = Number(arg1);
	let endInterval = Number(arg2);
	let magicNumber = Number(arg3);
	let counter = 0;

	for (let i = startInterval; i <= endInterval; i++) {
		for (let j = startInterval; j <= endInterval; j++) {
			counter++;
		
			if ((i + j) == magicNumber) {
				console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
				return;
			}
		}
	}
	console.log(`${counter} combinations - neither equals ${magicNumber}`);
}

sumOfTwo(['1', '10', '5']);
sumOfTwo(['88', '888', '1000']);
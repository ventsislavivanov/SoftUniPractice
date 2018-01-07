function twoNumbersSum([arg1, arg2, arg3]) {
	let startNumber = Number(arg1);
	let endNumber = Number(arg2);
	let magicNumber = Number(arg3);
	let counter = 0;
	for(let i = startNumber; i >= endNumber; i--) {
		for(let j = startNumber; j >= endNumber; j--) {
			counter++;
			if ((i + j) == magicNumber) {
				console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
				return;
			}
		}
	}
	console.log(`${counter} combinations - neither equals ${magicNumber}`);
}

twoNumbersSum(['10','1','5']);
twoNumbersSum(['888','88','1000']);
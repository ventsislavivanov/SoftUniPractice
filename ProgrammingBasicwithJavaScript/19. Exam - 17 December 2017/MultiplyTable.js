function multiplyTable([args]) {
	let number = Number(args);
	let result = '';

	let hundreds = Math.trunc((number % 1000) / 100);
	let tens = Math.trunc(((number % 1000) % 100) / 10);
	let ones = ((number % 1000) % 100) % 10;

	for (let i = 1; i <= ones; i++) {
		for (let j = 1; j <= tens; j++) {
			for (let o = 1; o <= hundreds; o++) {
				result = `${i} * ${j} * ${o} = ${i * j * o};`;
				console.log(result)
			}
		}
	}
}

multiplyTable(['324']);
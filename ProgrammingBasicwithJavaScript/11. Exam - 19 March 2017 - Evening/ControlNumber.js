function controlNumber([arg1, arg2, arg3]) {
	let n = Number(arg1);
	let m = Number(arg2);
	let c = Number(arg3);
	let counter = 0;
	let sum = 0;
	let result = '';


	for (let i = 1; i <= n; i++) {
		for (let j = m; j >= 1; j--) {
			sum += 2 * i + 3 * j;
			counter++;
			if (sum >= c) {
				console.log(`${counter} moves`);
				console.log(`Score: ${sum} >= ${c}`);
				return
			}
		}
	}
	console.log(`${counter} moves`);
}

controlNumber(['2', '2', '123']);

//controlNumber(['3', '4', '115']);
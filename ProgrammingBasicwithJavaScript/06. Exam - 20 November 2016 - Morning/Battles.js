function battles([arg1, arg2, arg3]) {
	let firstPlayerPokemons = Number(arg1);
	let secondPlayerPokemons = Number(arg2);
	let maxBattles = Number(arg3);
	let counter = 0;
	let result = '';

	for (let i = 1; i <= firstPlayerPokemons; i++) {
		for (j = 1; j <= secondPlayerPokemons; j++) {
			if (counter < maxBattles) {
				result += (`\(${i} <-> ${j}) `);
			} 
			counter++;
		}
	}
	console.log(result);
}

battles([2, 2, 3]);
function cake(arg) {
	let widthCake = Number(arg[0]);
	let lengthCake = Number(arg[1]);

	let cake = widthCake * lengthCake;
	let left = widthCake * lengthCake;
	let sumPieces = 0;
	let sumWithoutStop = 0;
	let lastElement = '';

	let leftWithStop = 0;
	let sumWithStop = 0;

	for (let i = 2; i < arg.length; i++) {
		let currentSumPieces = Number(arg[i]);
		lastElement = arg.slice(-1).pop();
		
		sumPieces += currentSumPieces;
		left -= currentSumPieces;

		if (lastElement == 'STOP') {
			let currentSumPiecesWithoutStop = Number(arg[i - 1]);
			sumWithoutStop += currentSumPiecesWithoutStop;
		}
	}
	
	if (sumPieces > cake) {
		console.log(`No more cake left! You need ${sumPieces - cake} pieces more.`);
	} else if (cake > sumWithoutStop) {
		console.log(`${cake - sumWithoutStop + lengthCake} pieces are left.`)
	} else if (sumWithoutStop > cake) {
		console.log(`No more cake left! You need ${sumWithoutStop - cake - lengthCake} pieces more.`);
	}
}

// cake(['10', '10', '20', '20', '20', '20', '21']);
// cake(['10', '2', '2', '4', '6', 'STOP']);
cake(['2', '2' , '4', '10', 'STOP' ]);
// cake(['1', '1', '1',  '1', '1', '10', 'STOP']);
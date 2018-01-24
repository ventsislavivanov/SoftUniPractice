function groupName([arg1, arg2, arg3, arg4, arg5]) {
	let bigLetter = arg1;
	let firstSmall = arg2;
	let secondSmall = arg3;
	let thrirdSmall = arg4;
	let num = Number(arg5);


	let counter = 0;

	for (var capitalLetter =  'A'.charCodeAt(0); capitalLetter <= bigLetter.charCodeAt(0); capitalLetter++) {
		for (var firstSmallLetter =  'a'.charCodeAt(0); firstSmallLetter <= firstSmall.charCodeAt(0); firstSmallLetter++) {
			for (var secondSmallLetter =  'a'.charCodeAt(0); secondSmallLetter <= secondSmall.charCodeAt(0); secondSmallLetter++) {
				for (var thirdSmallLetter =  'a'.charCodeAt(0); thirdSmallLetter <= thrirdSmall.charCodeAt(0); thirdSmallLetter++) {
					for (var diget =  0; diget <= num; diget++) {
						counter++;
					}
				}
			}
		}		
	}
	counter--
	console.log(counter);
}

groupName(['K', 'a', 'b', 'c', 5]);
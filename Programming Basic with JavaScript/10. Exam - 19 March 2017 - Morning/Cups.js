function cups([arg1, arg2, arg3]) {
	let neededCups = Number(arg1);
	let numbersWorkers = Number(arg2);
	let workDays = Number(arg3);

	let workingHours = numbersWorkers * workDays * 8;
	let numbersCups = Math.trunc(workingHours / 5);

	if (numbersCups >= neededCups) {
		console.log(`${((numbersCups - neededCups) * 4.2).toFixed(2)} extra money`);
	} else {
		console.log(`Losses: ${((neededCups - numbersCups) * 4.2).toFixed(2)}`);
	}
}

cups(['150', '7', '18'])
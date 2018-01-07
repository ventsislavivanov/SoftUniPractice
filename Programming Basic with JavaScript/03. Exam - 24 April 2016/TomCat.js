function tomCat([arg1]) {
	let weekesDay = Number(arg1);
	let sleepingPerYear = 30000;
	let year = 365;

	let workingDay = year - weekesDay;
	let timesPlay = workingDay * 63 + weekesDay * 127;
	let different = sleepingPerYear - timesPlay;
	if (sleepingPerYear > timesPlay) {
		hours = Math.trunc(different / 60);
		minutes = Math.trunc(different % 60);
		console.log(`Tom sleeps well`);
		console.log(`${hours} hours and ${minutes} minutes less for play`);
	} else {
		different = Math.abs(different);
		hours = Math.trunc(different / 60);
		minutes = Math.trunc(different % 60);
		console.log(`Tom will run away`);
		console.log(`${hours} hours and ${minutes} minutes more for play`);
	}
}

tomCat(['83']);
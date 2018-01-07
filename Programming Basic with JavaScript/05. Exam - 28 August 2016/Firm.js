function firm([arg1, arg2, arg3]) {
	let needHours = Number(arg1);
	let daysForWork = Number(arg2);
	let employees = Number(arg3);

	let hoursForWork = daysForWork * 8 - (daysForWork * 8) * 0.1;
	let overtimeInHours = employees * 2 * daysForWork;
	let totalHoursForWork = Math.floor	(hoursForWork + overtimeInHours);
	let different = totalHoursForWork - needHours;

	if (different >= 0) {
		console.log(`Yes!${different} hours left.`);
	} else {
		different = Math.abs(different);
		console.log(`Not enough time!${different} hours needed.`);
	}
}

firm(['90', '7', '3'])
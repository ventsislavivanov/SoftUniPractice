function workHours([arg1, arg2, arg3]) {
	let neededHours = Number(arg1);
	let workers = Number(arg2);
	let workDays = Number(arg3);

	let workHours = workers * workDays * 8;

	let different = workHours - neededHours;


	if (different >= 0) {
		console.log(`${workHours - neededHours} hours left`);
	} else {
		let penalties = (neededHours - workHours) * workDays;
		console.log(`${neededHours - workHours} overtime`);
		console.log(`Penalties: ${penalties}`);
	}
}

workHours(['1000', '10', '20']);
workHours(['2000', '10', '20']);
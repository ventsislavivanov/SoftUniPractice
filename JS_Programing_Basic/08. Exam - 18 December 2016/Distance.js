function distnce([arg1, arg2, arg3, arg4]) {
	let firstSpeedInKmPerHour = Number(arg1);
	let firstTimeInMin = Number(arg2);
	let secondTimeInMin = Number(arg3);
	let thirdTimeInMin = Number(arg4);

	let distanceWithFirstSpeed = firstSpeedInKmPerHour * firstTimeInMin / 60;
	let distanceNextRaise = firstSpeedInKmPerHour * 1.1;
	let distanceWithSecondSpeed = distanceNextRaise * secondTimeInMin / 60;
	let distanceNextReduction = distanceNextRaise * 0.95;
	let distanceNextThirdSpeed = distanceNextReduction * thirdTimeInMin / 60;
	let allDistance = (distanceWithFirstSpeed + distanceWithSecondSpeed + distanceNextThirdSpeed).toFixed(2);

	console.log(allDistance);
}


distnce(['140', '112', '75', '190']);
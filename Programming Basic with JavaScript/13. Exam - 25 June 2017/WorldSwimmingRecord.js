function worldSwimmingRecord([arg1, arg2, arg3]) {
	let worldRecord = parseFloat(arg1);
	let distance = parseFloat(arg2);
	let timeInSec = parseFloat(arg3);


	let needSwimming = distance * timeInSec;
	let addedTime = Math.trunc(distance / 15) * 12.5;
	let totalTime = needSwimming + addedTime;

	if (totalTime >= worldRecord) {
		console.log(`No, he failed! He was ${(totalTime - worldRecord).toFixed(2)} seconds slower.`);
	} else {
		console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
	}
}

worldSwimmingRecord(['10464', '1500', '20']);

worldSwimmingRecord(['55555.67', '3017', '5.03']); 

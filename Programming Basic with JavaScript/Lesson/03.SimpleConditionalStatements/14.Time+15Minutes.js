function test([arg1, arg2]) {
	let hours = Number(arg1);
	let minutes = Number(arg2);
	
	minutes = minutes + 15;

	if (minutes >= 60) {
		hours = hours + 1;
		minutes = minutes - 60;
	}

	if (hours >= 24) {
		hours = hours - 24;
	}

	if (minutes <= 9) {
		minutes = `0${minutes}`;
	}

	console.log(hours + ":" + minutes);
}

test(["23", "59"]);
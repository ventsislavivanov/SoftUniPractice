function timeForExam([arg1, arg2, arg3, arg4]) {
	let hourExam = Number(arg1);
	let minExam = Number(arg2);
	let hourArrive = Number(arg3);
	let minArrive = Number(arg4);

	let timeExam = hourExam * 60 + minExam;
	let timeArrive = hourArrive * 60 + minArrive;

	let different = timeExam - timeArrive;

	let hours = 0;
	let minutes = 0;


	if (different < 0) {
		different = Math.abs(different)
		if (different > 59) {
			hours = Math.trunc(different / 60);
			minutes = different % 60;
			if (minutes < 9) {
				minutes = `0${minutes}`
			}
			console.log("Late");
			console.log(`${hours}:${minutes} hours after the start`);
		} else {
			console.log("Late");
			console.log(different + " minutes after the start");
		}



	} else if (different <= 30) {
		if (different == 0) {
			console.log("On time");
		} else {
			console.log("On time");
			console.log(different + " minutes before the start");
		}



	} else if (different > 30) {
		if (different > 59) {
			hours = Math.trunc(different / 60);
			minutes = different % 60;
			if (minutes < 9) {
				minutes = `0${minutes}`
			}
			console.log("Early");
			console.log(`${hours}:${minutes} hours before the start`);
		} else {
			console.log("Early");
			console.log(different + " minutes before the start");
		}
	}
}


timeForExam(["9", "00", "8", "28"]);
function transportPrice([arg1, arg2]) {
	let n = Number(arg1);
	let partOfDay = arg2;
	let dailyPrice = 0;
	let nightPrice = 0;
	let startingFeeTaxi = 0.7;

	if (n >= 100) {
		if (partOfDay == "day"){
			dailyPrice = (n * 0.06).toFixed(2);
			console.log(dailyPrice);
		} else if (partOfDay == "night") {
			nightPrice =  (n * 0.06).toFixed(2);
			console.log(nightPrice);
		}
	} else if (n >= 20) {
		if (partOfDay == "day"){
			dailyPrice = (n * 0.09).toFixed(2);
			console.log(dailyPrice);
		} else if (partOfDay == "night") {
			nightPrice =  (n * 0.09).toFixed(2);
			console.log(nightPrice);
		}
	} else {
		if (partOfDay == "day"){
			dailyPrice = startingFeeTaxi + n * 0.79;
			console.log(dailyPrice);
		} else if (partOfDay == "night") {
			nightPrice = startingFeeTaxi + n * 0.9;
			console.log(nightPrice);
		}
	} 
}

transportPrice(["180", "night"]);
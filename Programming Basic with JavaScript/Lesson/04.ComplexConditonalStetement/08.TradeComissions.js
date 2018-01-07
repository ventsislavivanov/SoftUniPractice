function commissions([arg1, arg2]) {
	let town = arg1.toLowerCase();
	let s = Number(arg2);
	let commissions = -1;

	if(s < 0) {
		console.log("error");
	} else if (s >= 0 && s <= 500) {
		if (town == 'sofia') {
			commissions = (s * 5 / 100).toFixed(2);
			console.log(commissions);
		} else if (town == 'varna') {
			commissions = (s * 4.5 / 100).toFixed(2);
			console.log(commissions);
		} else if (town == 'plovdiv') {
			commissions = (s * 5.5 / 100).toFixed(2);
			console.log(commissions);
		} else {
			console.log("error");
		}
	} else if (s > 500 && s <= 1000) {
		if (town == 'sofia') {
			commissions = (s * 7 / 100).toFixed(2);
			console.log(commissions);
		} else if (town == 'varna') {
			commissions = (s * 7.5 / 100).toFixed(2);
			console.log(commissions);
		} else if (town == 'plovdiv') {
			commissions = (s * 8 / 100).toFixed(2);
			console.log(commissions);
		} else {
			console.log("error");
		}
	} else if (s > 1000 && s <= 10000) {
		if (town == 'sofia') {
			commissions = (s * 8 / 100).toFixed(2);
			console.log(commissions);
		} else if (town == 'varna') {
			commissions = (s * 10 / 100).toFixed(2);
			console.log(commissions);
		} else if (town == 'plovdiv') {
			commissions = (s * 12 / 100).toFixed(2);
			console.log(commissions);
		} else {
			console.log("error");
		}
	} else if (s > 10000) {
		if (town == 'sofia') {
			commissions = (s * 12 / 100).toFixed(2);
			console.log(commissions);
		} else if (town == 'varna') {
			commissions = (s * 13 / 100).toFixed(2);
			console.log(commissions);
		} else if (town == 'plovdiv') {
			commissions = (s * 14.5 / 100).toFixed(2);
			console.log(commissions);
		} else {
			console.log("error");
		}
	}
}

commissions(["Varna","-1"]);
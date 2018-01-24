function butterfly([arg1]) {
	let n = Number(arg1);
	let width = 2 * n -1 ;
	let height = 2 * (n - 2 ) + 1;

	for (i = 0; i < (height - 1) / 2; i++) {
		if (i % 2 == 0) {
			console.log("*".repeat((width - 3) / 2)  + "\\ /" + "*".repeat((width - 3) / 2));
		} else {
			console.log("-".repeat((width - 3) / 2)  + "\\ /" + "-".repeat((width - 3) / 2));
		}
	}

	console.log(" ".repeat((width - 1) / 2) + "@");

	for (i = ((height - 1) / 2) - 1; i >= 0 ; i--) {
		if (i % 2 == 0) {
			console.log("*".repeat((width - 3) / 2)  + "/ \\" + "*".repeat((width - 3) / 2));
		} else {
			console.log("-".repeat((width - 3) / 2)  + "/ \\" + "-".repeat((width - 3) / 2));
		}
	}

}


butterfly(['5'])
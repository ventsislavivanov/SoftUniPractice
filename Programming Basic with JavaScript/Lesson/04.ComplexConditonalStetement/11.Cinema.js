function cinema([arg1, arg2, arg3]) {
	let projection = arg1;
	let rows = Number(arg2);
	let columns = Number(arg3);
	
	switch( projection) {
		case "Premiere":
			console.log((rows * columns * 12).toFixed(2) + " leva");
			break;
		case "Normal":
			console.log((rows * columns * 7.5).toFixed(2) + " leva");
			break;
		case "Discount":
			console.log((rows * columns * 5).toFixed(2) + " leva");
			break;
	}
}

cinema(["Premiere", "10", "12"]);
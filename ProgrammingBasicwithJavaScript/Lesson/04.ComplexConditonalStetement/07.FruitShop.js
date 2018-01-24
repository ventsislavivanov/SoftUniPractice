function store([arg1, arg2, arg3]) {

	let fruit = arg1.toLowerCase();
	let day = arg2.toLowerCase();
	let quantity = Number(arg3);
	let price = -1;
	
	
	if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
		if (fruit == "banana") {
			price = (quantity * 2.50).toFixed(2);
			console.log(price);
		}
		else if (fruit == "apple") {
			price = (quantity * 1.20).toFixed(2);
			console.log(price);
		} else if (fruit == "orange") {
			price = (quantity * 0.85).toFixed(2);
			console.log(price);
		} else if (fruit == "grapefruit") {
			price = (quantity * 1.45).toFixed(2);
			console.log(price);
		} else if (fruit == "kiwi") {
			price = (quantity * 2.70).toFixed(2);
			console.log(price);
		} else if (fruit == "pineapple") {
			price = (quantity * 5.50).toFixed(2);
			console.log(price);
		} else if (fruit == "grapes") {
			price = (quantity * 3.85).toFixed(2);
			console.log(price);
		} else {
			console.log("error");
		}
	}
	else if (day == "sunday" || day == "saturday") {
		if (fruit == "banana") {
			price = (quantity * 2.70).toFixed(2);
			console.log(price);
		} else if (fruit == "apple") {
			price = (quantity * 1.25).toFixed(2);
			console.log(price);
		} else if (fruit == "orange") {
			price = (quantity * 0.90).toFixed(2);
			console.log(price);
		} else if (fruit == "grapefruit") {
			price = (quantity * 1.60).toFixed(2);
			console.log(price);
		} else if (fruit == "kiwi")	{
			price = (quantity * 3.00).toFixed(2);
			console.log(price);
		} else if (fruit == "pineapple") {
			price = (quantity * 5.60).toFixed(2);
			console.log(price);
		} else if (fruit == "grapes") {
			price = (quantity * 4.20).toFixed(2);
			console.log(price);
		} else {
			console.log("error");
		}
	} else {
		console.log("error");
	}
}

store(["banana", "monday", "6"])
function currentlyConverter([arg1, arg2, arg3]) {
	let bgn = 1;
	let usd = 1.79549;
	let eur = 1.95583;
	let gbp = 2.53405;

	let value = arg1;
	let currentlyCurrency = arg2;
	let currency = arg3;

	if (currency === "BGN") {
		if (currentlyCurrency === "USD") {
			let usdToBGN = (arg1 * usd).toFixed(2);
			console.log(usdToBGN + " BGN");
		} else if (currentlyCurrency === "EUR") {
			let eurToBGN = (arg1 * eur).toFixed(2);
			console.log(eurToBGN + " BGN");
		} else if (currentlyCurrency === "GBP") {
			let gbpToBGN = (arg1 * gbp).toFixed(2);
			console.log(gbpToBGN + " BGN");
		}
	} else if (currency === "USD") {
		if (currentlyCurrency === "BGN") {
			let bgnToUSD = (arg1 / usd).toFixed(2);
			console.log(bgnToUSD + " USD")
		} else if (currentlyCurrency === "EUR") {
			let eurToUSD = (arg1 * eur / usd).toFixed(2);
			console.log(eurToUSD + " USD")
		} else if (currentlyCurrency === "GBP") {
			let gbpToUSD = (arg1 * gbp / usd).toFixed(2);
			console.log(gbpToUSD + " USD")
		}
	} else if (currency === "EUR") {
		if (currentlyCurrency === "BGN") {
			let bgnToEUR = (arg1 / eur).toFixed(2);
			console.log(bgnToEUR + " EUR")
		} else if (currentlyCurrency === "USD") {
			let usdToEUR = (arg1 * usd / eur).toFixed(2);
			console.log(usdToEUR + " EUR");
		} else if (currentlyCurrency === "GBP") {
			let gbpToEUR = (arg1 * gbp / eur).toFixed(2);
			console.log(gbpToEUR + " EUR")
		}
	} else if (currency === "GBP") {
		if (currentlyCurrency === "BGN") {
			let	bgnToGBP = (arg1 / gbp).toFixed(2);
			console.log(bgnToGBP + " GBP");
		} else if (currentlyCurrency === "USD") {
			let usdToGBP = (arg1 * usd / gbp).toFixed(2);
			console.log(usdToGBP  + " GBP");
		} else if (currentlyCurrency === "EUR") {
			let	eurToGBP = (arg1 * eur / gbp).toFixed(2);
			console.log(eurToGBP  + " GBP");
		}
	}
}

currentlyConverter(["12.35", "EUR", "GBP"]);
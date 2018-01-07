function matchTicket([arg1, arg2, arg3]) {
	let budget = Number(arg1);
	let category = arg2
	let group = Number(arg3);
	let costs = 0;
	let price = 0;	

	
	if (group >= 50) {
		costs = budget * 0.25;
	} else if (group >= 25) {
		costs = budget * 0.4;
	}  else if (group >= 10) {
		costs = budget * 0.5;
	}  else if (group >= 5) {
		costs = budget * 0.6;
	}  else if (group >= 1) {
		costs = budget * 0.75;
	}

	if (category == 'Normal') {
		price = 249.99;
	} else if (category == 'VIP') {
		price = 499.99;
	}

	let leftMoneyNextCosts = budget - costs;
	let priceOfAllTickets = group * price;
	let differentMoney = leftMoneyNextCosts - priceOfAllTickets;

	if (differentMoney >= 0) {
		differentMoney = differentMoney.toFixed(2);
		console.log(`Yes! You have ${differentMoney} leva left.`);
	} else {
		differentMoney = (Math.abs(differentMoney)).toFixed(2);
		console.log(`Not enough money! You need ${differentMoney} leva.`);
	}
}

matchTicket(['1000', 'Normal', '1']);
matchTicket(['30000', 'VIP', '49']);
matchTicket(['50000', 'Normal', '200']);
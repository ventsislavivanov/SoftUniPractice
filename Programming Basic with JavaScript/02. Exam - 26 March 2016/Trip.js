function trip([arg1, arg2]) {
	let budget = Number(arg1);
	let season = arg2;
	let spendMoney = 0;


	if (budget > 1000) {
		spendMoney = (budget * 0.9).toFixed(2);
		console.log(`Somewhere in Europe`);
		console.log(`Hotel - ${spendMoney}`)
	} else if (budget > 100) {
		if (season == 'summer') {
			spendMoney = (budget * 0.4).toFixed(2);
			console.log(`Somewhere in Balkans`);
			console.log(`Camp - ${spendMoney}`)
		} else if (season == 'winter') {
			spendMoney = (budget * 0.8).toFixed(2);
			console.log(`Somewhere in Balkans`);
			console.log(`Hotel - ${spendMoney}`)
		}
	} else {
		if (season == 'summer') {
			spendMoney = (budget * 0.3).toFixed(2);
			console.log(`Somewhere in Bulgaria`);
			console.log(`Camp - ${spendMoney}`);
		} else if (season == 'winter') {
			spendMoney = (budget * 0.7).toFixed(2);
			console.log(`Somewhere in Bulgaria`);
			console.log(`Hotel - ${spendMoney}`);
		}
	}
}

trip(['1500', 'summer']);
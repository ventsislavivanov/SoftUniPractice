function bill(arg) {
	let month = Number(arg[0]);
	let electricity = 0;
	let water = 20;
	let internet = 15;
	let other = 0;
	let allWater = water * month;
	let allInternet = internet * month;
	
	for (let i = 1; i <= month; i++) {
		electricity += parseFloat(arg[i]);
		other += (parseFloat(arg[i]) + water + internet) * 1.2;
	}

	let avarage = (electricity + allWater + allInternet + other) / month;
	
	console.log(`Electricity: ${electricity.toFixed(2)} lv`);
	console.log(`Water: ${allWater.toFixed(2)} lv`);
	console.log(`Internet: ${allInternet.toFixed(2)} lv`);
	console.log(`Other: ${other.toFixed(2)} lv`);
	console.log(`Average: ${avarage.toFixed(2)} lv`);
}

bill(['5', '68.63', '89.25', '132.53', '93.53', '63.22'])
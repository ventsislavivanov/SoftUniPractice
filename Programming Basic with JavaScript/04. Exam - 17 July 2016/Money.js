function money([arg1, arg2, arg3]) {
	let bitcoint = Number(arg1);
	let yuan = parseFloat(arg2);
	let commission = parseFloat(arg3);

	let usd = 1.76;
	let eur = 1.95;

	bitcoint = bitcoint * 1168;
	yuan = yuan * 0.15 * 1.76;

	let moneyInEur = (bitcoint + yuan) / eur;
	let taxs = moneyInEur * commission / 100;
	let money = (moneyInEur - taxs).toFixed(2);

	console.log(money)
}



money(["1", "5", "5"]);

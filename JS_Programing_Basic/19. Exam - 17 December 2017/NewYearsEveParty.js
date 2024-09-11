function newYearsEveParty([arg1, arg2]) {
	let numberGuests = Number(arg1);
	let budget = Number(arg2);

	let priceCouvert = 20 * numberGuests;


	if (budget >= priceCouvert) {
		console.log(`Yes! ${Math.round(0.4 * (budget - priceCouvert))} lv are for fireworks and ${Math.round((budget - priceCouvert) - 0.4 * (budget - priceCouvert))} lv are for donation.`);
	} else {
		console.log(`They won't have enough money to pay the covert. They will need ${Math.round(priceCouvert - budget)} lv more.`);
	}
}

newYearsEveParty(['20', '1000']);
newYearsEveParty(['10', '150']);
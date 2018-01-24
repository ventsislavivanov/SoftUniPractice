function dwarfPresents(arg) {
	let numberDwarfs = arg[0];
	let moneySanta = arg[1];
	let countClock = 0
	let countCup = 0;
	let countMagnet = 0;
	let countTshirt = 0;

	for (let i = 2; i < arg.length; i++) {
		let currentGift = arg[i];

		if (currentGift == 'sand clock') {
			countClock++
		} else if (currentGift == 'cup') {
			countCup++;
		} else if (currentGift == 'magnet') {
			countMagnet++;
		} else if (currentGift == 't-shirt') {
			countTshirt++;
		}
	}

	let allPriceForGifts = countClock * 2.2 + countMagnet * 1.5 + countCup * 5 + countTshirt * 10;

	if (moneySanta >= allPriceForGifts) {
		console.log(`Santa Claus has ${(moneySanta - allPriceForGifts).toFixed(2)} more leva left!`);
	} else {
		console.log(`Santa Claus will need ${(allPriceForGifts - moneySanta).toFixed(2)} more leva.`);
	}
}


dwarfPresents(['5', '100', 'sand clock', 'magnet',  'cup', 't-shirt', 'magnet']);
dwarfPresents(['7',  '50', 'magnet', 't-shirt', 'sand clock', 'cup', 'cup', 'cup', 't-shirt']);
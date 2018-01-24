function schoolCamp([arg1, arg2, arg3, arg4]) {
	let season = arg1;
	let kindOfGroup = arg2;
	let students = Number(arg3);
	let overstays = Number(arg4);

	let priceOverstays = 0;
	let trainingSport = '';

	if (season == 'Winter' && (kindOfGroup == 'girls' || kindOfGroup == 'boys')) {
		priceOverstays = 9.6;
	} else if (season == 'Winter' && kindOfGroup == 'mixed') {
		priceOverstays = 10;
	} else if (season == 'Spring' && (kindOfGroup == 'girls' || kindOfGroup == 'boys')) {
		priceOverstays = 7.2;
	} else if (season == 'Spring' && kindOfGroup == 'mixed') {
		priceOverstays = 9.5;
	} else if (season == 'Summer' && (kindOfGroup == 'girls' || kindOfGroup == 'boys')) {
		priceOverstays = 15;
	} else if (season == 'Summer' && kindOfGroup == 'mixed') {
		priceOverstays = 20;
	}

	let allOverstays = overstays * priceOverstays * students;

	if (students >= 50) {
		allOverstays = allOverstays * 0.5;
	} else if (students >= 20) {
		allOverstays = allOverstays * 0.85;
	} else if (students >= 10) {
		allOverstays = allOverstays * 0.95;
	}

	if (season == 'Winter' && kindOfGroup == 'girls') {
		kindOfGroup = 'Gymnastics';
	} else if (season == 'Winter' && kindOfGroup == 'boys') {
		kindOfGroup = 'Judo';
	} else if (season == 'Winter' && kindOfGroup == 'mixed') {
		kindOfGroup = 'Ski';
	} else if (season == 'Spring' && kindOfGroup == 'girls') {
		kindOfGroup = 'Athletics';
	} else if (season == 'Spring' && kindOfGroup == 'boys') {
		kindOfGroup = 'Tennis';
	} else if (season == 'Spring' && kindOfGroup == 'mixed') {
		kindOfGroup = 'Cycling';
	} else if (season == 'Summer' && kindOfGroup == 'girls') {
		kindOfGroup = 'Volleyball';
	} else if (season == 'Summer' && kindOfGroup == 'boys') {
		kindOfGroup = 'Football';
	} else if (season == 'Summer' && kindOfGroup == 'mixed') {
		kindOfGroup = 'Swimming';
	}


	console.log(`${kindOfGroup} ${allOverstays.toFixed(2)} lv.`)
}

schoolCamp(['Spring', 'girls','20',  '7']);
//schoolCamp(['Winter', 'mixed', '9', '15']);
// schoolCamp(['Winter', 'mixed', '9', '15']);
// schoolCamp(['Spring', 'mixed', '17', '14']);

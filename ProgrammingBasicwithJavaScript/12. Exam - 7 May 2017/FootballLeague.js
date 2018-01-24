function footballLeague(arg) {
	let stadium = Number(arg[0]); 
	let people = Number(arg[1]);
	let sectorA = 0;
	let sectorB = 0;
	let sectorV = 0;
	let sectorG = 0;

	for (let i = 2; i <= people + 1; i++) {
		let currentSector  = arg[i];

		if (currentSector == 'A') {
			sectorA++;
		} else if (currentSector == 'B') {
			sectorB++;
		} else if (currentSector == 'V') {
			sectorV++;
		} else if (currentSector == 'G') {
			sectorG++;
		}
	}

	let fensA = sectorA / people * 100;
	let fensB = sectorB / people * 100;
	let fensV = sectorV / people * 100;
	let fensG = sectorG / people * 100;
	let fensParcent = people / stadium * 100;
	console.log(`${fensA.toFixed(2)}%`);
	console.log(`${fensB.toFixed(2)}%`);
	console.log(`${fensV.toFixed(2)}%`);
	console.log(`${fensG.toFixed(2)}%`);
	console.log(`${fensParcent.toFixed(2)}%`);
}

footballLeague(['76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B'])
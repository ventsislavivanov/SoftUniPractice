function lutenitsa([arg1,arg2, arg3]) {
	let tomatoInKg = parseFloat(arg1);
	let numberBoxes = Number(arg2);
	let numberJar = Number(arg3)
	
	let kgLutenitsa = tomatoInKg / 5;
	let prepairJarLutenitsa = kgLutenitsa / 0.535;
	let preparBoxesLutenitsa = prepairJarLutenitsa / numberJar;

	console.log(`Total lutenica: ${Math.floor(kgLutenitsa)} kilograms.`)

	if (preparBoxesLutenitsa > numberBoxes) {
		console.log(`${Math.floor(preparBoxesLutenitsa - numberBoxes)} boxes left.`);
		console.log(`${Math.floor(prepairJarLutenitsa - numberJar * numberBoxes)} jars left.`);
	} else {
		console.log(`${Math.floor(numberBoxes - preparBoxesLutenitsa)} more boxes needed.`)	
		console.log(`${Math.floor(numberJar * numberBoxes - prepairJarLutenitsa)} more jars needed.`)	
	}
}

// lutenitsa(['82000', '400', '20']);
lutenitsa(['12345.67', '520', '36']);
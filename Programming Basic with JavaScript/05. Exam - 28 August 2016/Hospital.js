function hospital(arg) {
	let n = Number(arg[0]);
	let doctor = 7;
	let treated = 0;
	let untreated = 0;

	for (let i = 1; i <= n; i++) {
		let currentPatients = Number(arg[i]);
		if (i % 3 == 0 && treated < untreated) {
			doctor +=1;
		}

		if (currentPatients > doctor)  {
			treated += doctor;
			untreated += currentPatients - doctor;
		} else {
			treated += currentPatients
		}
	}
	console.log(`Treated patients: ${treated}.`)
	console.log(`Untreated patients: ${untreated}.`)
}

hospital(['4', '7', '27', '9', '1']);
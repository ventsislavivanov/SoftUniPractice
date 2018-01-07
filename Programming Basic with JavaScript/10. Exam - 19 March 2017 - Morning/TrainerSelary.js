function trainerSelary(arg) {
	let numbersLecture = Number(arg[0]);
	let budget = parseFloat(arg[1]);
	let nameOfTeacher = '';
	let lectureJelev = 0;
	let lectureRoyal = 0;
	let lectureRoli = 0;
	let lectureTrifon = 0;
	let lectureSino = 0;
	let lectureOther = 0;
	let onePart = budget / numbersLecture;

	for (let i = 2; i <= numbersLecture + 1; i++) {
		nameOfTeacher = arg[i];

		if (nameOfTeacher == 'Jelev') {
			lectureJelev++;
		} else if (nameOfTeacher == 'RoYaL') {
			lectureRoyal++;
		} else if (nameOfTeacher == 'Roli') {
			lectureRoli++;
		} else if (nameOfTeacher == 'Trofon') {
			lectureTrifon++;
		} else if (nameOfTeacher == 'Sino') {
			lectureSino++;
		} else {
			lectureOther++;
		}
	}

console.log(`Jelev salary: ${(onePart * lectureJelev).toFixed(2)} lv`);
console.log(`RoYaL salary: ${(onePart * lectureRoyal).toFixed(2)} lv`);
console.log(`Roli salary: ${(onePart * lectureRoli ).toFixed(2)} lv`);
console.log(`Trofon salary: ${(onePart * lectureTrifon).toFixed(2)} lv`);
console.log(`Sino salary: ${(onePart * lectureSino).toFixed(2)} lv`);
console.log(`Others salary: ${ (onePart * lectureOther).toFixed(2)} lv`);

}


trainerSelary(['9', '1500',  'Roli', 'Trofon', 'Sino', 'Bai Ivan Ivanov', 'Jelev', 'Trofon', 'Sino', 'Sino', 'RoYaL']);
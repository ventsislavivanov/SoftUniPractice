function externalEvaluation(args) {
	let numStudents = Number(args[0]);
	let countExcellent = 0;
	let countVeryGood = 0;
	let countGood = 0;
	let countSatisfactory = 0;
	let countPoor = 0;

	for (let i = 1; i <= numStudents; i++) {
		let currentPoint = Number(args[i]);

		if (currentPoint > 76.5) {
			countExcellent++;
		} else if (currentPoint > 58.5) {
			countVeryGood++;
		} else if (currentPoint > 40.5) {
			countGood++;
		} else if (currentPoint > 22.5) {
			countSatisfactory++;
		} else if (currentPoint > 0) {
			countPoor++;
		}
	}
	console.log(`${(countPoor / numStudents * 100).toFixed(2)}% poor marks`)
	console.log(`${(countSatisfactory / numStudents * 100).toFixed(2)}% satisfactory marks`)
	console.log(`${(countGood / numStudents * 100).toFixed(2)}% good marks`)
	console.log(`${(countVeryGood / numStudents * 100).toFixed(2)}% very good marks`)
	console.log(`${(countExcellent / numStudents * 100).toFixed(2)}% excellent marks`)
}

externalEvaluation(['10', '18.5',  '30', '40', '60', '65','80.57', '84.25', '85.38', '89', '100']);
// externalEvaluation(['18', '42', '40', '36', '56', '64', '62', '61', '91', '81', '32', '14', '49', '51', '59', '57', ' 72', '73', '79'])
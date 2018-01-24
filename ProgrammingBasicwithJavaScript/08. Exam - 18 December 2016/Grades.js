function grades(arg) {
	let students = Number(arg[0]);
	
	let topCounter = 0;
	let betweenFourAndFiveCounter = 0
	let betweenThreeAndFourCounter = 0
	let failCounter = 0;
	let topStudentsGrades = 0;
	let betweenFourAndFive = 0;
	let betweenThreeAndFour = 0;
	let fail = 0;
	let averageGrades = 0;


	for (let i = 1; i <= students; i++) {
		let currentGrades = Number(arg[i]);
		if (currentGrades >= 5){
			topCounter++;
			topStudentsGrades = topCounter / students * 100;
		} else if (currentGrades >= 4) {
			betweenFourAndFiveCounter++;
			betweenFourAndFive = betweenFourAndFiveCounter / students * 100;
		} else if (currentGrades >= 3) {
			betweenThreeAndFourCounter++;
			betweenThreeAndFour = betweenThreeAndFourCounter / students * 100;
		} else {
			failCounter++;
			fail = failCounter / students * 100;
		}
		averageGrades += currentGrades / students;
	}
	
	console.log(`Top students: ${topStudentsGrades.toFixed(2)}%`);
	console.log(`Between 4.00 and 4.99: ${betweenFourAndFive.toFixed(2)}%`);
	console.log(`Between 3.00 and 3.99: ${betweenThreeAndFour.toFixed(2)}%`);
	console.log(`Fail: ${fail.toFixed(2)}%`);
	console.log(`Average: ${averageGrades.toFixed(2)}`);
}

grades(['10', '3.00',  '2.99', '5.68', '3.01', '4',  '4',  '6.00', '4.50', '2.44', '5']);
grades(['6', '2', '3', '4', '5', '6', '2.2']);
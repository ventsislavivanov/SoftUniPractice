function camp(arg1) {
	let numbersOfGroups = Number(arg1[0]);

	let allPeople = 0;

	let peopleWithTrain = 0;
	let peopleWithBigbus = 0;
	let peopleWithSmallbus = 0;
	let peopleWithMicrobus = 0;
	let peopleWithCar = 0;

	for (let i = 1; i <= numbersOfGroups; i++) {
		let currentGroup = Number(arg1[i]);

		allPeople += currentGroup;
		
		if (currentGroup >= 41) {
			peopleWithTrain += currentGroup;
		} else if (currentGroup > 25) {
			peopleWithBigbus += currentGroup;
		} else if (currentGroup > 12) {
			peopleWithSmallbus += currentGroup;
		} else if (currentGroup > 5) {
			peopleWithMicrobus += currentGroup;
		} else {
			peopleWithCar += currentGroup;
		}

	}
	
	     let percentCar = (peopleWithCar / allPeople * 100).toFixed(2);
	let percentMicrobus = (peopleWithMicrobus / allPeople * 100).toFixed(2);
	let percentSmallbus = (peopleWithSmallbus / allPeople * 100).toFixed(2);
	 let percentSBigbus = (peopleWithBigbus / allPeople * 100).toFixed(2);
	   let percentTrain = (peopleWithTrain / allPeople * 100).toFixed(2);

	console.log(percentCar + '%');
	console.log(percentMicrobus + '%');
	console.log(percentSmallbus + '%');
	console.log(percentSBigbus + '%');
	console.log(percentTrain + '%');
}

camp(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']);
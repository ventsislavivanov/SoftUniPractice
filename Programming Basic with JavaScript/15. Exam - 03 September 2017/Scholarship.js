function scholarship([arg1, arg2, arg3]) {
	let income = parseFloat(arg1);
	let avarageSuccess = parseFloat(arg2);
	let minWorkSelary = parseFloat(arg3);

	let socialScholarship = 0;
	let successScholarship = 0;

	if (minWorkSelary >= income && avarageSuccess >= 4.5)  {
		socialScholarship = minWorkSelary * 0.35;
	}


	if (avarageSuccess >= 5.5) {
		successScholarship = avarageSuccess * 25;
	}


	if (successScholarship >= socialScholarship && successScholarship !== 0) {
		console.log(`You get a scholarship for excellent results ${Math.floor(successScholarship)} BGN`)
	} else if (socialScholarship > successScholarship && socialScholarship !== 0) {
		console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
	} else {
		console.log(`You cannot get a scholarship!`);
	}
}

//scholarship(['480.00', '4.60', '450.00']);
scholarship(['450 00', '5.85', '400.00']);

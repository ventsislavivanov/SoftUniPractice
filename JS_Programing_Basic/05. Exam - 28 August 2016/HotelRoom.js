function hotelRoom([arg1, arg2]) {
	let mounth = arg1;
	let overnightStays = Number(arg2);
	let overnightStaysInStudio = 0;
	let overnightStaysInApartament = 0;
	let discountApartament = 1;
	let discountStudio = 1;

	if (mounth == "May" || mounth == "October") {
		overnightStaysInApartament = 65;
		overnightStaysInStudio = 50;
	} else if (mounth == "June" || mounth == "September") {
		overnightStaysInApartament = 68.7;
		overnightStaysInStudio = 75.2;
	} else if (mounth == "July" || mounth == "August") {
		overnightStaysInApartament = 77;
		overnightStaysInStudio = 76;
	}


	if ((mounth == "May" || mounth == "October")  && overnightStays > 14) {
		discountStudio = 0.7;
	} else if ((mounth == "May" || mounth == "October")  && overnightStays > 7) {
		discountStudio = 0.95;
	} else if ((mounth == "June" || mounth == "September")  && overnightStays > 14) {
		discountStudio = 0.8;
	}

    if (overnightStays > 14) {
		discountApartament = 0.9;
	} 

	let priceApartament = (overnightStays * overnightStaysInApartament * discountApartament).toFixed(2);
	let priceStudio = (overnightStays * overnightStaysInStudio * discountStudio).toFixed(2);

	console.log(`Apartment: ${priceApartament} lv.`);
	console.log(`Studio: ${priceStudio} lv.`);
}


hotelRoom(['May', '15']);
hotelRoom(['June', '14']);
hotelRoom(['August', '20']);

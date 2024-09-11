function photoPicture([arg1, arg2, arg3]) {
	let numberPicture = Number(arg1);
	let typePicture = arg2;
	let kindOrder = arg3;

	let priceForOnePic = 0;
	let priceForAllPic = 0;

	if (typePicture == '9X13') {
		priceForOnePic = 0.16;
	} else if (typePicture == '10X15') {
		priceForOnePic = 0.16;
	} else if (typePicture == '13X18') {
		priceForOnePic = 0.38;
	} else if (typePicture == '20X30') {
		priceForOnePic = 2.9;
	}

	priceForAllPic = numberPicture * priceForOnePic;


	if (typePicture == '9X13' && numberPicture > 50) {
		priceForAllPic = priceForAllPic * 0.95;
	} else if (typePicture == '10X15' && numberPicture > 80) {
		priceForAllPic = priceForAllPic * 0.97;
	} else if (typePicture == '13X18' && numberPicture > 100) {
		priceForAllPic = priceForAllPic * 0.95;
	} else if (typePicture == '13X18' && numberPicture >= 50) {
		priceForAllPic = priceForAllPic * 0.97;
	} else if (typePicture == '20X30' && numberPicture > 50) {
		priceForAllPic = priceForAllPic * 0.91;
	} else if (typePicture == '20X30' && numberPicture >= 10) {
		priceForAllPic = priceForAllPic * 0.93;
	}

	if (kindOrder == 'online') {
		priceForAllPic = priceForAllPic * 0.98;
	}

	console.log(`${priceForAllPic.toFixed(2)}BGN`);
}

// photoPicture(['5', '9X13', 'online']);
photoPicture(['50', '13X18', 'online']);
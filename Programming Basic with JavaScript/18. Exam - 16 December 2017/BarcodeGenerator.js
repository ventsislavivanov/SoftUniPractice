function barcodeGenerator([arg1, arg2]) {
	let startDigets = Number(arg1);
	let endDigets = Number(arg2);

	let startThousands = Math.trunc(startDigets / 1000);
	let startHundreds = Math.trunc((startDigets % 1000) / 100);
	let startTens = Math.trunc(((startDigets % 1000) % 100) / 10);
	let startOnes = ((startDigets % 1000) % 100) % 10;

	let endThousands = Math.trunc(endDigets / 1000);
	let endHundreds = Math.trunc((endDigets % 1000) / 100);
	let endTens = Math.trunc(((endDigets % 1000) % 100) / 10);
	let endOnes = ((endDigets % 1000) % 100) % 10;

	let result = '';

	for (let firtstDiget = startThousands; firtstDiget <= endThousands; firtstDiget++) {
		for (let secondDiget = startHundreds; secondDiget <= endHundreds; secondDiget++) {
			for (let thirthDiget = startTens; thirthDiget <= endTens; thirthDiget++) {
				for (let fourthDiget = startOnes; fourthDiget <= endOnes; fourthDiget++) {
					if (firtstDiget % 2 != 0 && secondDiget % 2 != 0 && thirthDiget % 2 != 0 && fourthDiget % 2 != 0) {
						result += `${firtstDiget}${secondDiget}${thirthDiget}${fourthDiget} `

					}
				}
			}
		}
	}
	console.log(result);
}

barcodeGenerator(['2345', '6789'])
function modifyAverage(num) {
	let numStr = String(num)
	// firstWay with reduce
	// '101' => 1,0,1
	//let getAverage = (numString) => numStr.split('').map(Number).reduce((a, b) => a +=b) / numStr.length;

	// second way with loop
	let getAverage = (numString) => {
		let sum = 0
		for (let i = 0; i < numString.length; i++) {
			let element = Number(numString[i]);
			sum += element;
		}
		return sum / numString.length;
	}

	while (getAverage(numStr) <= 5) {
		numStr += '9';
	}
	console.log(numStr);
}

let output = 101;
modifyAverage(output);
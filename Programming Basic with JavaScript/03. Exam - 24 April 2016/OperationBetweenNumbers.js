function operationBetweenNumbers([arg1, arg2, arg3]) {
	let num1 = Number(arg1);
	let num2 = Number(arg2);
	let sign = arg3;
	let result = 0; 

	if (sign == '+') {
		result = num1 + num2;
		if (result % 2 == 0) {
			console.log(`${num1} + ${num2} = ${result} - even`)
		} else {
			console.log(`${num1} + ${num2} = ${result} - odd`)
		}
	} else if (sign == "-") {
		result = num1 - num2;
		if (result % 2 == 0) {
			console.log(`${num1} - ${num2} = ${result} - even`)
		} else {
			console.log(`${num1} - ${num2} = ${result} - odd`)
		}
	} else if (sign == "*") {
		result = num1 * num2;
		if (result % 2 == 0) {
			console.log(`${num1} * ${num2} = ${result} - even`)
		} else {
			console.log(`${num1} * ${num2} = ${result} - odd`)
		}
	} else if (sign == "/") {
		result = (num1 / num2).toFixed(2);
		if (num2 == 0) {
			console.log(`Cannot divide ${num1} by zero`);
		} else {
			console.log(`${num1} / ${num2} = ${result}`);
		}
	} else if (sign == "%") {
		result = (num1 % num2);
		if (num2 == 0) {
			console.log(`Cannot divide ${num1} by zero`);
		} else {
			console.log(`${num1} % ${num2} = ${result}`);
		}
	} 
}

operationBetweenNumbers(['0', '10', '%']);
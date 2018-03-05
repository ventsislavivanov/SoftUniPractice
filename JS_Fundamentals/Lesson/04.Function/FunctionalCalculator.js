function calculator(a, b, operand) {
	let add = function (c, d) { return c + d }
	let sudstract = function (c, d) { return c - d }
	let multiply = function (c, d) { return c * d }
	let divide = function (c, d) { return c / d }
	switch (operand) {
		case '*':
			multiply(a, b);
			break;
		case '/':
			divide(a, b);
			break;
		case '+':
			add(a, b);
			break;
		case '-':
			sudstract(a, b);
			break;
	}
}

console.log(calculator(3,4,'*'));
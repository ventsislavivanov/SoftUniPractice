function multiplicationTable(n) {
	let output = `<table border=1>\n`;
	output += '<tr><th>x</th>';	
	
	for (let i = 1; i <= n; i++) {
		output += `<th>${i}</th>`;	
	}
	output += '</tr>\n';

	for (let row = 1; row <= n; row++) {
		output += `<tr><th>${row}</th>`;
		for (col = 1; col <= n; col++) {
			output += `<td>${row * col}</td>`
		}
		output += '</tr>\n';
	}
	output += '</table>';

	console.log(output);
}

multiplicationTable(5);
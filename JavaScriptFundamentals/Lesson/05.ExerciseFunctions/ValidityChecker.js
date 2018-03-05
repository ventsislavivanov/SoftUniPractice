function validityChecker(input) {
	let [x1, y1, x2, y2] = input;
	let firstDistance = calcDistance(x1, y1, 0, 0);
	let secondDistance = calcDistance(x2, y2, 0, 0);
	let thirdDistance = calcDistance(x1, y1, x2, y2);
	  
	console.log(`{${x1}, ${y1}} to {0, 0} is ${firstDistance % 1 !== 0 ? 'invalid' : 'valid'}`);
	console.log(`{${x2}, ${y2}} to {0, 0} is ${secondDistance % 1 !== 0 ? 'invalid' : 'valid'}`);
	console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${thirdDistance % 1 !== 0 ? 'invalid' : 'valid'}`);
  
	function calcDistance(x1, y1, x2, y2) {
		let deltaX = Math.abs(x1 - x2);
		let deltaY = Math.abs(y1 - y2);
	  	return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	}
}

let output = [2, 1, 1, 1];
validityChecker(output);
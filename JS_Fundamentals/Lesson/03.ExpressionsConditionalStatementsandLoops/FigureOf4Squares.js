function figureOf4Squares(n) {
	let rowOuter = '';
	let rowInner = '';
	rowOuter = '+' + 
		'-'. repeat(n - 2) +
		'+' +
		'-'. repeat(n - 2) +
		'+';

	//First part
	console.log(rowOuter); 


// 	if (n - 2 > 2) {
// 		console.log(rowInner);
// 		for (let i = 0; i < n; i++) {
// 			if (i - 2 >= n) {
// 				rowInner = 
// 				'|'+
// 				' '. repeat(i - 2) +
// 				'|' +
// 				' '. repeat(i - 2) +
// 				'|';
// 			}
// 		}
// 	}


	//Thrird part
	console.log(rowOuter);
// 	if (n - 2 > 2) {
// 		console.log(rowInner);
// 	}
	// Fiffth part
	console.log(rowOuter);
}

figureOf4Squares(2);
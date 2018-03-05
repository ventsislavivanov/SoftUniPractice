function composeTag(data) {
	let file = data[0];
	let alternate = data[1];
	console.log(`<img src="${file}" alt="${alternate}">`);
}

let arr = ['smiley.gif', 'Smiley Face'];
let output = arr;
composeTag(output);
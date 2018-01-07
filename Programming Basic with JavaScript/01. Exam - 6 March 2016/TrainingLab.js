function trainingLab([arg1, arg2]) {
	let w = Number(arg1);
	let h = Number(arg2);
	let corridor = 100;
	
	w = w * 100;
	h = h * 100;

	let realH = h - corridor;
	let rows = Math.trunc(w / 120);
	let deskH = Math.trunc(realH / 70);
	let workPlace = rows * deskH;
	let realWorkPlace = workPlace - 3;

	console.log(realWorkPlace);
}

trainingLab(["15", "8.9"]);
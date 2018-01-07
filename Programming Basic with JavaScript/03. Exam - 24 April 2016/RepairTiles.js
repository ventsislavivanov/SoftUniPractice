function repairTiles([arg1, arg2, arg3, arg4, arg5]) {
	let sideSqure = Number(arg1);
	let widthTile = Number(arg2);
	let lenghtTile = Number(arg3);
	let widthBench = Number(arg4);
	let lenghtBench = Number(arg5);

	let squreArea = sideSqure * sideSqure;
	let benchArea = widthBench * lenghtBench;
	let coverageArea = squreArea - benchArea;
	let tileArea = widthTile * lenghtTile;
	let needTile = (coverageArea / tileArea).toFixed(2);
	let needTime = (needTile * 0.2).toFixed(2);

	console.log(needTile);
	console.log(needTime);
}

repairTiles(["20", "5", "4", "1", "2"]);


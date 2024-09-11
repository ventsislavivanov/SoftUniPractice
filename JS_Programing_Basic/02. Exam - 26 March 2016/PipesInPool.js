function pool([arg1, arg2, arg3, arg4]) {
	let volume = Number(arg1);
	let pipeOne = Number(arg2);
	let pipeTwo = Number(arg3);
	let hours = parseFloat(arg4);

	let volPipeOne = hours * pipeOne;
	let volPipeTwo = hours * pipeTwo;
	let totalVolPipe = volPipeOne + volPipeTwo;

	if (volume >= totalVolPipe) {
		console.log(`The pool is ${Math.trunc(totalVolPipe / volume * 100)}% full. Pipe 1: ${Math.trunc(volPipeOne / totalVolPipe * 100)}%. Pipe 2: ${Math.trunc(volPipeTwo / totalVolPipe * 100)}%.`);
	} else {
		console.log(`For ${hours} hours the pool overflows with ${(totalVolPipe - volume).toFixed(1)} liters.`);
	}
}

pool(['1000', '100', '120', '3']);

pool(['100', '100', '100', '2.5']);

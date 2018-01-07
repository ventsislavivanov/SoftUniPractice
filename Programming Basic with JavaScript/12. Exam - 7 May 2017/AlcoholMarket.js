function alcoholMarket([arg1, arg2, arg3, arg4, arg5]) {
	let pricewiskey = parseFloat(arg1);
	let beer = parseFloat(arg2);
	let wine = parseFloat(arg3);
	let rakia = parseFloat(arg4);
	let wiskey = parseFloat(arg5);


	let priceRakia = pricewiskey / 2;
	let priceWine = priceRakia * 0.6; 
	let priceBeer = priceRakia * 0.2;
	let sumRakia = priceRakia * rakia;
	let sumWine = priceWine * wine;
	let sumBeer = priceBeer * beer;
	let sumwiskey = pricewiskey * wiskey;
	let totalSum = sumRakia + sumWine + sumBeer + sumwiskey;
	console.log(totalSum.toFixed(2));
}
		
alcoholMarket(['50', '10', '3.5', '6.5', '1']);


alcoholMarket(['63.44', '3.57', '6.35', '8.15', '2.5']);

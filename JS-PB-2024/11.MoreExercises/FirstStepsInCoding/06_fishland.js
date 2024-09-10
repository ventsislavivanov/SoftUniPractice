function solve(input) {
  let priceS = Number(input.shift());
  let priceC = Number(input.shift());
  let kgP = Number(input.shift());
  let kgSd = Number(input.shift());
  let kgM = Number(input.shift());

  let priceP = 1.6 * priceS;
  let priceSd = 1.8 * priceC;
  let priceM = 7.5;

  let all = priceP * kgP + priceSd * kgSd + priceM * kgM;
  console.log(all.toFixed(2));
}

solve(["6.90", "4.20", "1.5", "2.5", "1"]);

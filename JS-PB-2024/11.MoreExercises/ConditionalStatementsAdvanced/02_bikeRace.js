function solve(input) {
  let nJuniors = Number(input.shift());
  let nSenior = Number(input.shift());
  let race = input.shift();

  let pJunior = 0;
  let pSenior = 0;
  if (race === "trail") {
    pJunior = 5.5;
    pSenior = 7;
  } else if (race === "cross-country") {
    pJunior = 8;
    pSenior = 9.5;
    if (nJuniors + nSenior >= 50) {
      pJunior = pJunior - pJunior * 0.25;
      pSenior = pSenior - pSenior * 0.25;
    }
  } else if (race === "downhill") {
    pJunior = 12.25;
    pSenior = 13.75;
  } else if (race === "road") {
    pJunior = 20;
    pSenior = 21.5;
  }

  let totalAmount = nJuniors * pJunior + nSenior * pSenior;
  totalAmount = totalAmount - totalAmount * 0.05;

  console.log(totalAmount.toFixed(2));
}

solve(["30", "25", "cross-country"]);

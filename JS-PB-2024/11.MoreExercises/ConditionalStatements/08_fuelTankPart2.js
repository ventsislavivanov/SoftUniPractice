function solve(input) {
  let typeFuel = input.shift();
  let valueFuel = Number(input.shift());
  let hasCard = input.shift();

  let bPr = 2.22;
  let dPr = 2.33;
  let gPr = 0.93;

  let bD = 0.18;
  let dD = 0.12;
  let gD = 0.08;

  if (hasCard === "Yes") {
    bPr = bPr - bD;
    dPr = dPr - dD;
    gPr = gPr - gD;
  }

  let price = 0;
  if (typeFuel === "Gas") {
    price = valueFuel * gPr;
  } else if (typeFuel === "Gasoline") {
    price = valueFuel * bPr;
  } else if (typeFuel === "Diesel") {
    price = valueFuel * dPr;
  }

  if(valueFuel >= 20 && valueFuel <= 25) {
    price = price - price * 0.08;
  } else if (valueFuel > 25 ) {
    price = price - price * 0.1;
  }

  console.log(`${price.toFixed(2)} lv.`);
}

solve(["Gas", "30", "Yes"]);

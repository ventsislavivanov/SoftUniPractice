function solve(input) {
  let budget = Number(input[0]);
  let typeTicket = input[1];
  let nGroup = Number(input[2]);

  let oneTiket = 0;
  let transport = 0;
  if (nGroup >= 1 && nGroup <= 4) {
    transport = budget * 0.75;
  } else if (nGroup >= 5 && nGroup <= 9) {
    transport = budget * 0.6;
  } else if (nGroup >= 10 && nGroup <= 24) {
    transport = budget * 0.5;
  } else if (nGroup >= 25 && nGroup <= 49) {
    transport = budget * 0.4;
  } else {
    transport = budget * 0.25;
  }

  if (typeTicket === "VIP") {
    oneTiket = 499.99;
  } else if (typeTicket === "Normal") {
    oneTiket = 249.99;
  }

  let neededMoney = budget - transport - nGroup * oneTiket;
  console.log();

  if (neededMoney >= 0) {
    console.log(`Yes! You have ${neededMoney.toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${Math.abs(neededMoney).toFixed(2)} leva.`
    );
  }
}

solve(["30000", "VIP", "49"]);

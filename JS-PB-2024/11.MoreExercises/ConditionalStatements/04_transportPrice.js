function solve(input) {
  let km = Number(input.shift());
  let partOfDay = input.shift();
  let pricePerKm = 0;
  let startTax = 0;

  if (km >= 100) {
    pricePerKm = 0.06;
  } else if (km >= 20) {
    pricePerKm = 0.09;
  } else {
    startTax = 0.7;
    if (partOfDay === "day") {
      pricePerKm = 0.79;
    } else if (partOfDay === "night") {
      pricePerKm = 0.9;
    }
  }

  let minPrice = startTax + km * pricePerKm;
  console.log(minPrice.toFixed(2));
}

solve(["5", "day"]);

function solve(input) {
  let season = input.shift();
  let km = Number(input.shift());

  let pricePerKm = 0;

  if (km <= 5000) {
    if (season === "Summer") {
      pricePerKm = 0.9;
    } else if (season === "Winter") {
      pricePerKm = 1.05;
    } else if (season === "Spring" || season === "Autumn") {
      pricePerKm = 0.75;
    }
  } else if (km > 5000 && km <= 10000) {
    if (season === "Summer") {
      pricePerKm = 1.1;
    } else if (season === "Winter") {
      pricePerKm = 1.25;
    } else if (season === "Spring" || season === "Autumn") {
      pricePerKm = 0.95;
    }
  } else if (km > 10000 && km <= 20000) {
    pricePerKm = 1.45;
  }

  let profit = pricePerKm * km * 4;
  profit = profit - profit * 0.1;

  console.log(profit.toFixed(2));
}

solve(["Winter", "5678"]);

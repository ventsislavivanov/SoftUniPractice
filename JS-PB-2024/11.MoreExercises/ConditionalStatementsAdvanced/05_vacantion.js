function solve(input) {
  let budget = Number(input.shift());
  let season = input.shift();

  let base = "";
  let location = "";
  if (budget <= 1000) {
    base = "Camp";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.65;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.45;
    }
  } else if (budget > 1000 && budget <= 3000) {
    base = "Hut";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.8;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.6;
    }
  } else if (budget > 3000) {
    base = "Hotel";
    price = budget * 0.9;
    if (season === "Summer") {
      location = "Alaska";
    } else if (season === "Winter") {
      location = "Morocco";
    }
  }

  console.log(`${location} - ${base} - ${price.toFixed(2)}`);
}

solve(["800", "Summer"]);
solve(["799.5", "Winter"]);

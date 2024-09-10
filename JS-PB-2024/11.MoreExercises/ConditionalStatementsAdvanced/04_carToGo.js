function solve(input) {
  let budget = Number(input.shift());
  let season = input.shift();

  let classCar = "";
  let typeCar = "";
  let price = 0;

  if (budget <= 100) {
    classCar = "Economy class";

    if (season === "Summer") {
      typeCar = "Cabrio";
      price = budget * 0.35;
    } else {
      typeCar = "Jeep";
      price = budget * 0.65;
    }
  } else if (budget > 100 && budget <= 500) {
    classCar = "Compact class";

    if (season === "Summer") {
      typeCar = "Cabrio";
      price = budget * 0.45;
    } else {
      typeCar = "Jeep";
      price = budget * 0.8;
    }
  } else if (budget > 500) {
    classCar = "Luxury class";
    typeCar = "Jeep";
    price = budget * 0.9;
  }

  console.log(`${classCar}`);
  console.log(`${typeCar} - ${price.toFixed(2)}`);
}

solve(["450", "Winter"]);

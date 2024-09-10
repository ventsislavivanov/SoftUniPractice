function solve(input) {
  let x = Number(input.shift());
  let y = Number(input.shift());
  let z = Number(input.shift());
  let workers = Number(input.shift());

  let totalGrape = x * y;
  let totalWine = (totalGrape * 0.4) / 2.5;
  let left = totalWine - z;
  let needed = z - totalWine;
  let winePerWorker = left / workers;

  if (totalWine >= z) {
    console.log(
      `Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`
    );
    console.log(
      `${Math.ceil(left)} liters left -> ${Math.ceil(
        winePerWorker
      )} liters per person.`
    );
  } else {
    console.log(
      `It will be a tough winter! More ${Math.floor(
        needed
      )} liters wine needed.`
    );
  }
}

solve(["650", "2", "175", "3"]);

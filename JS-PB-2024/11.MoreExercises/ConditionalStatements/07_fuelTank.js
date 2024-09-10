function solve(input) {
  let typeFuel = input.shift();
  let tankLiters = Number(input.shift());

  if (typeFuel === "Diesel" || typeFuel === "Gasoline" || typeFuel === "Gas") {
    typeFuel = typeFuel.toLowerCase();
    if (tankLiters >= 25) {
      console.log(`You have enough ${typeFuel}.`);
    } else {
      console.log(`Fill your tank with ${typeFuel}!`);
    }
  } else {
    console.log("Invalid fuel!");
  }
}

solve(["Diesel", "10"]);

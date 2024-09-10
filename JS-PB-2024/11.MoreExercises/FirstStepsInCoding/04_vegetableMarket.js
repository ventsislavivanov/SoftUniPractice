function solve(input) {
  let kgVeg = Number(input.shift());
  let kgFr = Number(input.shift());
  let veg = Number(input.shift());
  let fr = Number(input.shift());

  let inEuro = (kgVeg * veg + kgFr * fr) / 1.94;
  console.log(inEuro.toFixed(2));
}

solve(["0.194", "19.4", "10", "10"]);

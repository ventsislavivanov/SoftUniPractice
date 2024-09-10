function solve(input) {
  let w = Number(input.shift()) * 100;
  let h = Number(input.shift()) * 100 - 100;

  hTable = Math.floor(h / 70);
  wTable = Math.floor(w / 120);

  let workStations = hTable * wTable - 3;
  console.log(workStations);
}

solve(["15", "8.9"]);

function solve(input) {
  let x = Number(input.shift());
  let y = Number(input.shift());
  let h = Number(input.shift());

  let frontBackWall = x * x * 2 - 1.2 * 2;
  let otherWalls = x * y * 2 - 1.5 * 1.5 * 2;
  let green = frontBackWall + otherWalls;

  //Покривът има следните размери:
  let tail = x * y * 2 + x * h;
  //•	Два правоъгълника със страни „x“ и „y“
  //•	Два равностранни триъгълника със страна „x“ и височина „h“

  console.log((green / 3.4).toFixed(2));
  console.log((tail / 4.3).toFixed(2));
}

solve(["6", "10", "5.2"]);

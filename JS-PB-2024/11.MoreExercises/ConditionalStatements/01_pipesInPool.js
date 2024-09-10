function solve(input) {
  let v = Number(input.shift());
  let p1 = Number(input.shift());
  let p2 = Number(input.shift());
  let h = Number(input.shift());

  let v1 = p1 * h;
  let v2 = p2 * h;
  let vPipe = (((v1 + v2) / v) * 100).toFixed(2);
  let vPipe1 = ((v1 / (v1 + v2)) * 100).toFixed(2);
  let vPipe2 = ((v2 / (v1 + v2)) * 100).toFixed(2);

  let moreWater = v1 + v2 - v;

  if (moreWater > 0) {
    console.log(`For ${h} hours the pool overflows with ${moreWater} liters.`);
  } else {
    console.log(
      `The pool is ${vPipe}% full. Pipe 1: ${vPipe1}%. Pipe 2: ${vPipe2}%.`
    );
  }
}

solve(["1000", "100", "120", "3"]);
solve(["100", "100", "100", "2.5"]);

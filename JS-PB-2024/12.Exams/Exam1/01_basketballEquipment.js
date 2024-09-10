function solve(input) {
    let taxPerYear = +input.shift();

    let shoes = taxPerYear - taxPerYear * 0.4;
    let set = shoes - shoes * 0.2;
    let ball = set / 4;
    let other = ball / 5
    let total = (taxPerYear + shoes + set + ball + other).toFixed(2);

    console.log(total)
}
solve(['320']);
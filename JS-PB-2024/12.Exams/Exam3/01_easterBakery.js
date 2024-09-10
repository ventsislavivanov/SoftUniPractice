function solve(input) {

    // •	цената на един пакет мая е с 80% по-ниска от цената на килограм захар
    let flourPrice = Number(input.shift());
    let flourKg = Number(input.shift());
    let sugarKg = Number(input.shift());
    let eggsD = Number(input.shift());
    let yeastN = Number(input.shift());

    let sugarPrice = flourPrice - flourPrice * 0.25;
    let eggsPricePerD = flourPrice * 1.1;
    let yeastPrice = sugarPrice * 0.2;

    console.log((flourPrice * flourKg + sugarPrice * sugarKg + eggsPricePerD * eggsD + yeastPrice * yeastN).toFixed(2))
}

solve(["50", "10", "3.5", "6", "1"])
// solve(["63.44", "3.57", "6.35", "8", "2"])

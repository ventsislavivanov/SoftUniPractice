function solve(input) {
    let budget = +input.shift();
    let nOvernightStays = +input.shift();
    let priceOvernightStays = +input.shift();
    let percent = +input.shift();

    if (nOvernightStays > 7) {
        priceOvernightStays = priceOvernightStays * 0.95;
    }
    let totalOvernightStays = nOvernightStays * priceOvernightStays;
    let otherCost = budget * percent / 100;
    let total = totalOvernightStays + otherCost;

    if (budget >= total) {
        console.log(`Ivanovi will be left with ${(budget - total).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(total - budget).toFixed(2)} leva needed.`);
    }
}

solve(["800.50", "8", "100", "2"]);
solve(["500", "7", "66", "15"]);

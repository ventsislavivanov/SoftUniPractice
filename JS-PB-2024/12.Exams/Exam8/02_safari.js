function solve(input) {
    let budget = +input.shift();
    let neededFuel = +input.shift();
    let day = input.shift();

    let priceFuel = neededFuel * 2.1;
    let totalCost = priceFuel + 100;

    if (day === 'Saturday') {
        totalCost = totalCost * 0.9;
    } else if (day === 'Sunday') {
        totalCost = totalCost * 0.8;
    }

    if (budget >= totalCost) {
        console.log(`Safari time! Money left: ${(budget - totalCost).toFixed(2)} lv. `);
    } else {
        console.log(`Not enough money! Money needed: ${(totalCost - budget).toFixed(2)} lv.`);
    }
}

solve(["1000", "10", "Sunday"]);
// solve(["120", "30", "Saturday"]);

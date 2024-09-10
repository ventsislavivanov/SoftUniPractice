function solve(input) {
    let agency = input.shift();
    let nElder = +input.shift();
    let nKinder = +input.shift();
    let priceElder = +input.shift();
    let taxService = +input.shift();
    let profitPercent = 20;

    let priceKinder = priceElder - priceElder * 0.7;
    priceElder = priceElder + taxService;
    priceKinder = priceKinder + taxService;
    let totalTicketsPrice = nElder * priceElder + nKinder * priceKinder;
    let profit = totalTicketsPrice * profitPercent / 100;
    console.log(`The profit of your agency from ${agency} tickets is ${profit.toFixed(2)} lv.`)
}

// solve(["WizzAir", "15", "5", "120", "40"]);
solve(["Ryanair", "60", "23", "158.96", "39.12"]);

function solve(input) {
    let budget = +input.shift();
    let index = 0;
    let command = input[index++];
    let price = Number(input[index++]);
    let sum = 0;
    let count = 0;

    while (true) {
        if (command === "Stop") {
            console.log(`You bought ${count} products for ${sum.toFixed(2)} leva.`);
            break;
        }
        count++;

        if (count % 3 === 0) {
            price = price / 2;
        }

        budget -= price;
        sum += price;

        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${((Math.abs(budget)).toFixed(2))} leva!`);
            break;
        }

        command = input[index++];
        price = Number(input[index++])
    }
}

// solve(['153.20', 'Backpack', '25.20', 'Shoes', '54', 'Sunglasses', '30', 'Stop']);
solve(['54', 'Thermal underwear', '24', 'Sunscreen', '45']);
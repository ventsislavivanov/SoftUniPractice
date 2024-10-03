function solve(input) {
    let commandOrNumber = input.shift();

    let priceWithoutTaxes = 0;
    while (true) {
        if (commandOrNumber === 'regular') {
            break;
        }
        if (commandOrNumber === 'special') {
            break;
        }
        const currentPrice = Number(commandOrNumber)
        if (currentPrice > 0) {
            priceWithoutTaxes += currentPrice;
        } else {
            console.log("Invalid price!");
        }

        commandOrNumber = input.shift();
    }

    if (priceWithoutTaxes > 0) {
        const taxes = priceWithoutTaxes * 0.2;
        let totalPrice = priceWithoutTaxes + taxes;

        if (commandOrNumber === 'special') {
            totalPrice = totalPrice * 0.9;
        }

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    } else {
        console.log("Invalid order!");
    }
}

// solve([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ]);
// solve([
//     '1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30',
//     'regular'
// ]);
solve([
    'regular'
]);

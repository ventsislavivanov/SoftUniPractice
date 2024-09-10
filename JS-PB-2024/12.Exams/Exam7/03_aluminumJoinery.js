function solve(input) {
    let nJoinery = +input.shift();
    let typeJoinery = input.shift();
    let isDelivery = input.shift() === 'With delivery';

    if (nJoinery < 10) {
        return console.log('Invalid order');
    }

    let unitPrice = 0;
    let totalPrice = 0;
    switch (typeJoinery) {
        case '90X130':
            unitPrice = 110;
            totalPrice = nJoinery * unitPrice;
            if (nJoinery > 60) {
                totalPrice = totalPrice - totalPrice * 0.08;
            } else if (nJoinery > 30) {
                totalPrice = totalPrice - totalPrice * 0.05;
            }
            break;
        case '100X150':
            unitPrice = 140;
            totalPrice = nJoinery * unitPrice;
            if (nJoinery > 80) {
                totalPrice = totalPrice - totalPrice * 0.1;
            } else if (nJoinery > 40) {
                totalPrice = totalPrice - totalPrice * 0.06;
            }
            break;
        case '130X180':
            unitPrice = 190;
            totalPrice = nJoinery * unitPrice;
            if (nJoinery > 50) {
                totalPrice = totalPrice - totalPrice * 0.12;
            } else if (nJoinery > 20) {
                totalPrice = totalPrice - totalPrice * 0.07;
            }
            break;
        case '200X300':
            unitPrice = 250;
            totalPrice = nJoinery * unitPrice;
            if (nJoinery > 50) {
                totalPrice = totalPrice - totalPrice * 0.14;
            } else if (nJoinery > 25) {
                totalPrice = totalPrice - totalPrice * 0.09;
            }
            break;
    }

    if (isDelivery) {
        totalPrice = totalPrice + 60;
    }

    if (nJoinery > 99) {
        totalPrice = totalPrice * 0.96
    }

    console.log(`${totalPrice.toFixed(2)} BGN`);
}

// solve(["40", "90X130", "Without delivery"]);
solve(["105", "100X150", "With delivery"]);

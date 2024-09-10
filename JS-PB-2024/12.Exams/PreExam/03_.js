function solve(input) {
    let weight = +input.shift();
    let typeService = input.shift();
    let distance = +input.shift();

    let price = 0;
    if (weight > 0 && weight < 1) {
        price = 0.03;
    } else if (weight >= 1 && weight < 10) {
        price = 0.05;
    } else if (weight >= 10 && weight < 40) {
        price = 0.1;
    } else if (weight >= 40 && weight < 90) {
        price = 0.15;
    } else if (weight >= 90 && weight < 150) {
        price = 0.2;
    }

    let totalPrice = price * distance;

    let markup = 0;
    if (typeService === 'express') {
        if (weight > 0 && weight < 1) {
            markup = price * 0.8;
        } else if (weight >= 1 && weight < 10) {
            markup = price * 0.4;
        } else if (weight >= 10 && weight < 40) {
            markup = price * 0.05;
        } else if (weight >= 40 && weight < 90) {
            markup = price * 0.02;
        } else if (weight >= 90 && weight < 150) {
            markup = price * 0.01;
        }

        totalPrice = totalPrice + markup * weight * distance;
    }

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}

// solve(['1.5', 'standard', '100']);
// solve(['87', 'express', '130']);
solve(['20', 'standard', '349']);


function solve(input) {
    let town = input.shift();
    let packet = input.shift();
    let isVip = input.shift() === 'yes';
    let nDays = +input.shift();

    let price = 0;
    let isValidTown = town === 'Bansko' || town === 'Borovets' || town === 'Varna' || town === 'Burgas';
    let isValidPacket = packet === 'noEquipment' || packet === 'withEquipment' || packet === 'noBreakfast' || packet === 'withBreakfast';

    if (!isValidTown || !isValidPacket) {
        return console.log("Invalid input!");
    }

    if (town === 'Bansko' || town === 'Borovets') {
        if (packet === 'withEquipment') {
            price = 100;
            if (isVip) {
                price = price - price * 0.1;
            }
        } else if (packet === 'noEquipment') {
            price = 80;
            if (isVip) {
                price = price - price * 0.05;
            }
        }
    } else if (town === 'Burgas' || town === 'Varna') {
        if (packet === 'withBreakfast') {
            price = 130;
            if (isVip) {
                price = price - price * 0.12;
            }
        } else if (packet === 'noBreakfast') {
            price = 100;
            if (isVip) {
                price = price - price * 0.07;
            }
        }
    }
    let total = price * nDays;
    if (nDays > 7) {
        total = total - price;
    }

    if (nDays >= 1) {
        console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
    } else {
        console.log("Days must be positive number!")
    }
}

solve(["Borovets", "noEquipment", "yes", "6"]);
// solve(["Bansko", "withEquipment", "no", "2"]);
// solve(["Burgas", "noBreakfast", "no", "4"]);
// solve(["Varna", "withBreakfast", "no", "0"]);
// solve(["Gabrovo", "noBreakfast", "no", "3"]);
// solve(['Varna', 'withBreakfast', 'yes', '5']);
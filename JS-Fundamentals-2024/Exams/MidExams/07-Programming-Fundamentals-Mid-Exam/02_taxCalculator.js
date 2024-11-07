function solve(input) {
    const vehicles = input.shift().split(">>");
    let totalTax = 0;

    for (const vehicle of vehicles) {
        let taxPrice = 0;
        let increasePerKm = 0;
        let increasePrice = 0;
        let declinePerYears = 0;

        let [carType, yearsUsed,  kilometers] = vehicle.split(" ");
        yearsUsed = Number(yearsUsed);
        kilometers = Number(kilometers);


        if (carType === 'family') {
            taxPrice = 50;
            increasePerKm = Math.floor(kilometers / 3000);
            increasePrice = 12;
            declinePerYears = 5;
        } else if (carType === 'heavyDuty') {
            taxPrice = 80;
            increasePerKm = Math.floor(kilometers / 9000);
            declinePerYears = 8;
            increasePrice = 14;
        } else if (carType === 'sports') {
            taxPrice = 100;
            increasePerKm = Math.floor(kilometers / 2000);
            declinePerYears = 9;
            increasePrice = 18;
        } else {
            console.log("Invalid car type.");
            continue;
        }

        const taxVehicle = increasePerKm * increasePrice + (taxPrice - yearsUsed * declinePerYears);
        totalTax += taxVehicle;
        console.log(`A ${carType} car will pay ${taxVehicle.toFixed(2)} euros in taxes.`);
    }

    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}

// solve([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]);
solve([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]);
//A family car will pay 37.00 euros in taxes.
// Invalid car type.
// A heavyDuty car will pay 52.00 euros in taxes.
// A sports car will pay 127.00 euros in taxes.
// A family car will pay 71.00 euros in taxes.
// The National Revenue Agency will collect 287.00 euros in taxes.
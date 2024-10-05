function solve(arr) {
    const n = arr.shift();
    let cars = {}
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = arr.shift().split('|');
        cars[car] = {};
        cars[car]['mileage'] = Number(mileage);
        cars[car]['fuel'] = Number(fuel);
    }

    let line = arr.shift();
    while (line !== "Stop") {
        const command = line.split(" : ");
        switch (command[0]) {
            case 'Drive':
                const carD = command[1];
                const distance = Number(command[2]);
                const fuelD = Number(command[3]);

                if (cars[carD]['fuel'] >= fuelD) {
                    cars[carD]['mileage'] += distance;
                    cars[carD]['fuel'] -= fuelD;

                    console.log(`${carD} driven for ${distance} kilometers. ${fuelD} liters of fuel consumed.`);
                } else {
                    console.log("Not enough fuel to make that ride");
                }

                if (cars[carD]['mileage'] >= 100000) {
                    console.log(`Time to sell the ${carD}!`);
                    delete cars[carD];
                }

                break;
            case 'Refuel':
                const carRl = command[1];
                let fuelRl = Number(command[2]);

                if (cars[carRl]['fuel'] + fuelRl > 75) {
                    fuelRl = 75 - cars[carRl]['fuel'];
                }

                cars[carRl]['fuel'] += fuelRl;

                console.log(`${carRl} refueled with ${fuelRl} liters`);
                break;
            case 'Revert':
                const carRt = command[1];
                const kilometers = Number(command[2]);

                cars[carRt]['mileage'] -= kilometers;


                if (cars[carRt]['mileage'] < 10000) {
                    cars[carRt]['mileage'] = 10000
                } else {
                    console.log(`${carRt} mileage decreased by ${kilometers} kilometers`);
                }
                break;
        }

        line = arr.shift();
    }

    for (const key in cars) {
        console.log(`${key} -> Mileage: ${cars[key].mileage} kms, Fuel in the tank: ${cars[key].fuel} lt.`);
    }
}

solve([
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
    ]
);
//Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
// Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
// Not enough fuel to make that ride
// Audi A6 refueled with 50 liters
// Mercedes CLS mileage decreased by 500 kilometers
// Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
// Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
// Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.

// solve([
//         '4',
//         'Lamborghini Veneno|11111|74',
//         'Bugatti Veyron|12345|67',
//         'Koenigsegg CCXR|67890|12',
//         'Aston Martin Valkryie|99900|50',
//         'Drive : Koenigsegg CCXR : 382 : 82',
//         'Drive : Aston Martin Valkryie : 99 : 23',
//         'Drive : Aston Martin Valkryie : 2 : 1',
//         'Refuel : Lamborghini Veneno : 40',
//         'Revert : Bugatti Veyron : 2000',
//         'Stop'
//     ]
// );
//Not enough fuel to make that ride
// Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
// Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
// Time to sell the Aston Martin Valkryie!
// Lamborghini Veneno refueled with 1 liters
// Bugatti Veyron mileage decreased by 2000 kilometers
// Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
// Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.
// Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.

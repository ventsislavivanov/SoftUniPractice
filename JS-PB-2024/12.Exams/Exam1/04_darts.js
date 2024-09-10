function solve(input) {
    let name = input.shift();
    let startPoint = 301;
    let index = 0;
    let inputElement = input[index];
    let shootsGood = 0;
    let shootsBad = 0;
    let isWin = false;

    while (inputElement !== 'Retire') {
        let sector = input[index++];
        let point = +input[index++];
        let minusPoint = 0;

        switch (sector) {
            case 'Triple':
                minusPoint = point * 3;
                break;
            case 'Double':
                minusPoint = point * 2;
                break;
            case 'Single':
                minusPoint = point;
                break;
        }

        inputElement = input[index];

        if (startPoint < minusPoint) {
            shootsBad++;
            continue;
        }

        startPoint -= minusPoint;
        shootsGood++;

        if (startPoint === 0) {
            isWin = true;
            break;
        }
    }

    if (isWin) {
        console.log(`${name} won the leg with ${shootsGood} shots.`);
    } else {
        console.log(`${name} retired after ${shootsBad} unsuccessful shots.`)
    }
}

// solve(['Michael van Gerwen', 'Triple', '20', 'Triple', '19', 'Double', '10', 'Single', '3', 'Single', '1', 'Triple', '20', 'Triple', '20', 'Double', '20']);
solve(['Rob Cross', 'Triple', '20', 'Triple', '20', 'Triple', '20', 'Triple', '20', 'Double', '20', 'Triple', '20', 'Double', '5', 'Triple', '10', 'Double', '6', 'Retire']);
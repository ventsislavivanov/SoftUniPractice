function solve(input) {
    let nCargos = Number(input.shift());

    let busCount = 0;
    let truckCount = 0;
    let trainCount = 0;
    let busCargo = 0;
    let truckCargo = 0;
    let trainCargo = 0;
    let allCargo = 0

    for (let i = 0; i < nCargos; i++) {
        let currentCargo = Number(input[i]);
        allCargo += currentCargo;
        if (currentCargo <= 3) {
            busCargo += currentCargo;
            busCount++;
        } else if (currentCargo >=4 && currentCargo <= 11)  {
            truckCargo += currentCargo;
            truckCount++;
        } else if (currentCargo >= 12) {
            trainCargo += currentCargo;
            trainCount++;
        }
    }
    let average =(busCargo * 200 + truckCargo * 175 + trainCargo * 120) / allCargo;

    console.log(average.toFixed(2));
    console.log((busCargo / allCargo * 100).toFixed(2) + '%');
    console.log((truckCargo / allCargo * 100).toFixed(2) + '%');
    console.log((trainCargo / allCargo * 100).toFixed(2) + '%');
}

solve([
    '4',
    '1',
    '5',
    '16',
    '3'
])
function solve(input) {
    let startSector = 'A';

    let endSector = input.shift();
    let rowInSectorA = Number(input.shift());
    let oddRowSeats = Number(input.shift());

    let combinationCounter = 0;
    let rowCounter = 0;

    for (let sector = startSector.charCodeAt(0); sector <= endSector.charCodeAt(0); sector++) {
        for (let row = 1; row <= rowInSectorA + rowCounter; row++) {
            let seatsInCurrentRow = (row % 2 !== 0) ? oddRowSeats : oddRowSeats + 2;
            for (let seat = 0; seat < seatsInCurrentRow; seat++) {
                let currentSeat = String.fromCharCode(97 + seat)
                let combination = String.fromCharCode(sector) + row + currentSeat;
                combinationCounter++;

                console.log(combination);
            }
        }
        rowCounter++;
    }

    console.log(combinationCounter)
}

solve(['B', '3', '2']);
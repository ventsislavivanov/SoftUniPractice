function solve(input) {
    let w = Number(input.shift());
    let l = Number(input.shift());
    let h = Number(input.shift());
    let data = input;
    let index = 0;
    let inputElement = data[index];

    let allFreePlace = w * l * h;

    while(inputElement !== 'Done') {
        if(allFreePlace < 0) {
            break;
        }
        let boxPlace = Number(inputElement);
        allFreePlace -= boxPlace;

        index++;
        inputElement = data[index];
    }

    if(allFreePlace >= 0) {
        console.log(`${allFreePlace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(allFreePlace)} Cubic meters more.`);
    }
}


solve(["10", 
    "1",
    "2",
    "4", 
    "6",
    "Done"])
    
    
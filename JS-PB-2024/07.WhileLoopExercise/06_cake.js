function solve(input) {
    let w = Number(input.shift());
    let l = Number(input.shift());

    let allPieces = w * l;
    let sumPieces = 0;

    let index = 0;
    let inputElement = input[index];


    while(inputElement !== 'STOP') {
        if (allPieces < 0) {
            break;
        }

        let currentPieces= Number(inputElement);
        allPieces -= currentPieces;
        sumPieces += currentPieces;

        index++;
        inputElement = input[index];
    }


    if(allPieces >= 0) {
        console.log(`${allPieces} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${Math.abs(allPieces)} pieces more.`);
    }
}

// solve(["10",
//     "10",
//     "20",
//     "20",
//     "20",
//     "20",
//     "21"])

solve(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);
        
    
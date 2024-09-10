function solve(input) {
    let volume = Number(input.shift());
    let fens = Number(input.shift());

    let aCount = 0;
    let bCount = 0;
    let vCount = 0;
    let gCount = 0;


    for (let i = 0; i < fens; i++) {
        let fen = input[i];
        if (fen === "A") {
            aCount++;
        } else if (fen === "B") {
            bCount++;
        } else if (fen === "V") {
            vCount++;
        } else if (fen === "G") {
            gCount++;
        }
    }

    console.log((aCount / fens * 100).toFixed(2) + '%');
    console.log((bCount / fens * 100).toFixed(2) + '%');
    console.log((vCount / fens * 100).toFixed(2) + '%');
    console.log((gCount / fens * 100).toFixed(2) + '%');
    console.log((fens / volume * 100).toFixed(2) + '%');
}

solve([
    '76',
    '10',
    'A',
    'V',
    'V',
    'V',
    'G',
    'B',
    'A',
    'V',
    'B',
    'B'
]);
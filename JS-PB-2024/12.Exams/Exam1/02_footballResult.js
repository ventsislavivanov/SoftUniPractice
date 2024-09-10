function solve(input) {
    let firstMatch = input.shift();
    let secondMatch = input.shift();
    let thirdMatch = input.shift();

    let wonCount = 0;
    let lostCount = 0;
    let drawnCount = 0;
    // check first
    if (+firstMatch[0] > +firstMatch[2]) {
        wonCount++;
    } else if (+firstMatch[0] < +firstMatch[2]) {
        lostCount++;
    } else if (+firstMatch[0] === +firstMatch[2]) {
        drawnCount++;
    }
    // check second
    if (+secondMatch[0] > +secondMatch[2]) {
        wonCount++;
    } else if (+secondMatch[0] < +secondMatch[2]) {
        lostCount++;
    } else if (+secondMatch[0] === +secondMatch[2]) {
        drawnCount++;
    }
    // check third
    if (+thirdMatch[0] > +thirdMatch[2]) {
        wonCount++;
    } else if (+thirdMatch[0] < +thirdMatch[2]) {
        lostCount++;
    } else if (+thirdMatch[0] === +thirdMatch[2]) {
        drawnCount++;
    }

    console.log(`Team won ${wonCount} games.`)
    console.log(`Team lost ${lostCount} games.`)
    console.log(`Drawn games: ${drawnCount}`)
}

solve(['3:1', '0:2', '0:0']);
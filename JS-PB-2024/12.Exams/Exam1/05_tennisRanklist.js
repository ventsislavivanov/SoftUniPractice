function solve(input) {
    let nTournaments = +input.shift();
    let startScore = +input.shift();

    let winScore = 0;
    let winCount = 0;
    for (let i = 0; i <nTournaments; i++) {
        let stage = input[i];
        let point = 0;
        switch (stage) {
            case 'W':
                winCount++;
                point = 2000;
                break;
            case 'F':
                point = 1200;
                break;
            case 'SF':
                point = 720;
                break;
        }

        startScore += point;
        winScore += point;
    }

    let aScore = Math.floor(winScore / nTournaments);
    let wP = (winCount / nTournaments * 100).toFixed(2)

    console.log(`Final points: ${startScore}`);
    console.log(`Average points: ${aScore}`);
    console.log(`${wP}%`);
}

// solve(['5', '1400', 'F', 'SF', 'W', 'W', 'SF']);
solve(['4', '750', 'SF', 'W', 'SF', 'W']);
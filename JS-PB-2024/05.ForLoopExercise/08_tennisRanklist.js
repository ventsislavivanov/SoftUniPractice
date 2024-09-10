function solve(input) {
    let tournaments = Number(input.shift());
    let startingScore = Number(input.shift());
    let stages = input;

    let wScore = 2000;
    let fScore = 1200;
    let sfScore = 720;

    let tournamentsIdx = 0;
    let score = startingScore;
    let winCouner = 0;

    for (let i = 0; i < tournaments; i++) {
        let stage = stages[tournamentsIdx];
        switch (stage) {
            case 'W':
                winCouner++;
                score += wScore;
                break;
            case 'F':
                score += fScore;
                break;
            case 'SF':
                score += sfScore;
                break;
        }

        tournamentsIdx++;        
    }

    let avarageScore = Math.floor((score - startingScore) / tournaments);
    let persentWinTournaments = winCouner / tournaments * 100;

    console.log(`Final points: ${score}`);
    console.log(`Average points: ${avarageScore}`);
    console.log(`${persentWinTournaments.toFixed(2)}%`);
}

solve(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"])
    
    
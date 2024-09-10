function solve(input) {
    let country = input.shift();
    let discipline = input.shift();
    let maxScore = 20;
    let hardScore = 0;
    let playScore = 0;

    switch (country) {
        case 'Russia':
            switch (discipline) {
                case 'ribbon':
                    hardScore = 9.1;
                    playScore = 9.4;
                    break;
                case 'hoop':
                    hardScore = 9.3;
                    playScore = 9.8;
                    break;
                case 'rope':
                    hardScore = 9.6;
                    playScore = 9;
                    break;
            }
            break;
        case 'Bulgaria':
            switch (discipline) {
                case 'ribbon':
                    hardScore = 9.6;
                    playScore = 9.4;
                    break;
                case 'hoop':
                    hardScore = 9.55;
                    playScore = 9.75;
                    break;
                case 'rope':
                    hardScore = 9.5;
                    playScore = 9.4;
                    break;
            }
            break;
        case 'Italy':
            switch (discipline) {
                case 'ribbon':
                    hardScore = 9.2;
                    playScore = 9.5;
                    break;
                case 'hoop':
                    hardScore = 9.45;
                    playScore = 9.35;
                    break;
                case 'rope':
                    hardScore = 9.7;
                    playScore = 9.15;
                    break;
            }
            break;
    }

    let totalScore = hardScore + playScore;
    let percentToMax = (maxScore - totalScore) / 20  * 100;

    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${discipline}.`);
    console.log(`${percentToMax.toFixed(2)}%`);
}

solve(['Bulgaria', 'ribbon']);
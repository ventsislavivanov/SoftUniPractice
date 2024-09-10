function solve(input) {
    let name = input.shift();
    let initialPoints = +input.shift();
    let nCritics = +input.shift();
    let index = 0;
    let rater = input[index++];
    let ratePoint = input[index++];
    let target = 1250.5;
    let isNominated = false;

    for (let i = 0; i < nCritics; i++) {
        initialPoints += rater.length * Number(ratePoint) / 2;

        if (initialPoints > target) {
            isNominated = true;
            break;
        }

        rater = input[index++];
        ratePoint = input[index++];
    }

    if (isNominated) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${initialPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(target - initialPoints).toFixed(1)} more!`);
    }
}

solve(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
solve(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])


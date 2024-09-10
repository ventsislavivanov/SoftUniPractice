function solve(input) {
    let actorName = input.shift();
    let academyScore = Number(input.shift());
    let judgeCounter = Number(input.shift());
    let judgeArray = input;

    let totalScore = academyScore;
    let nameIdx = 0;
    let scoreIdx = 1;

    for (let i = 0; i < judgeCounter; i++) {
        let judgeName = judgeArray[nameIdx];
        let judgeScore = judgeArray[scoreIdx];

        totalScore += (judgeName.length * Number(judgeScore)) / 2

        if (totalScore > 1250.5) {
            break;
        }

        nameIdx  += 2;
        scoreIdx += 2;
    }

    if (totalScore > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(totalScore).toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - totalScore).toFixed(1)} more!`);
    }
}

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
    
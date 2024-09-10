function solve(input) {
    let player1 = input.shift();
    let player2 = input.shift();
    let index = 0;
    let inputElement = input[index];

    let winner = '';
    let scoreWinner = 0;
    let score1 = 0;
    let score2 = 0;
    let isNumberWars = false;

    while (inputElement !== 'End of game') {
        let card1 = +input[index++];
        let card2 = +input[index++];

        if (card1 > card2) {
            score1 += card1 - card2;
        } else if (card1 < card2) {
            score2 += card2 - card1;
        } else if (card1 === card2) {
            isNumberWars = true;
            let warCard1 = +input[index];
            let warCard2 = +input[index + 1];

            if (warCard1 > warCard2) {
                winner = player1;
                scoreWinner = score1;
            } else if (warCard1 < warCard2) {
                winner = player2;
                scoreWinner = score2;
            }
            break;
        }

        inputElement = input[index];
    }

    if (isNumberWars) {
        console.log(`Number wars!`);
        console.log(`${winner} is winner with ${scoreWinner} points`);
    } else {
        console.log(`${player1} has ${score1} points`);
        console.log(`${player2} has ${score2} points`);
    }
}

// solve(['Desi', 'Niki', '7', '5', '3', '4', '3', '3', '5', '3']);
solve(['Elena', 'Simeon', '6', '3', '2', '5', '8', '9', 'End of game']);
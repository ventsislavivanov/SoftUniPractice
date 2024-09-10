function solve(input) {
    let index = 0;
    let command = input[index];
    let winner = '';
    let winerPoint = Number.MIN_SAFE_INTEGER;


    while (command !== 'Stop') {
        let player = command;
        index++;
        let checkNum= Number(input[index]);
        index++;

        let points = 0;
        let countFor= 0;
        for (let i = 0; i < player.length; i++) {
            countFor++;
            let currentChar = player[i];
            let charInNum = currentChar.charCodeAt(0);

            if (charInNum === checkNum) {
                points += 10;
            } else {
                points += 2;
            }

            if (countFor !== player.length) {
                checkNum = Number(input[index++]);
            }
        }

        if(winerPoint <= points) {
            winerPoint = points;
            winner = player;
        }

        command = input[index];
    }

    console.log(`The winner is ${winner} with ${winerPoint} points!`);
}

// solve(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
solve(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);

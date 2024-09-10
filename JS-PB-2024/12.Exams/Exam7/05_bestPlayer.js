function solve(input) {
    let index= 0;
    let command = input[index++];
    let maxGoals = Number.MIN_SAFE_INTEGER;
    let bestPlayer = '';
    let hasHatTrick = false;

    while (command !== "END") {
        let player = command;
        let nGoals = Number(input[index++]);

        if (maxGoals < nGoals) {
            maxGoals = nGoals;
            bestPlayer = player;
            if (nGoals >= 3) {
                hasHatTrick = true;
            }
        }

        if (nGoals >= 10) {
            break;
        }

        command = input[index++];
    }

    console.log(`${bestPlayer} is the best player!`);
    if (hasHatTrick) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}

// solve(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
// solve(["Silva", "5", "Harry Kane", "10"]);
solve(["Petrov", "2", "Drogba", "11"]);

function solve(input) {
    let sequence = input.shift().split(' ').map(Number);
    let command = input.shift();
    let targetCount = 0;

    while (command !== "End") {
        const index = Number(command);
        const currValue = sequence[index];

        if (index > sequence.length - 1 || currValue === -1) {
            command = input.shift();
            continue;
        }

        targetCount++;

        sequence.splice(index, 1, -1);
        sequence = sequence.map(el => {
            if (el !== -1) {
                if (el > currValue) {
                    el = el - currValue;
                } else {
                    el = el + currValue;
                }
            }

            return el;
        })

        command = input.shift();
    }
    console.log(`Shot targets: ${targetCount} -> ${sequence.join(' ')}`);
}

solve(["24 50 36 70", "0", "4", "3", "1", "End"]);
solve(["30 30 12 60 54 66", "5", "2", "4", "0", "End"])

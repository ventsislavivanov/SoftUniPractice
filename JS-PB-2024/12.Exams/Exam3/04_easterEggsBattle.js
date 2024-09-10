function solve(input) {
    let eggsFirst = +input.shift();
    let eggsSecond = +input.shift();
    let index = 0;
    let command = input[index];

    while (index < input.length) {

        if (command === "End") {
            console.log(`Player one has ${eggsFirst} eggs left.`);
            console.log(`Player two has ${eggsSecond} eggs left.`);
            break;
        }

        if (command === "one") {
            eggsSecond--;

            if (eggsSecond <= 0) {
                console.log(`Player two is out of eggs. Player one has ${eggsFirst} eggs left.`);
                break;
            }

        } else if (command === "two") {
            eggsFirst--;

            if (eggsFirst <= 0) {
                console.log(`Player one is out of eggs. Player two has ${eggsSecond} eggs left.`);
                break;
            }
        }

        index++;
        command = input[index];
    }
}

// solve(['5', '4', 'one', 'two', 'one', 'two', 'two', 'End']);
// solve(['2', '6', 'one', 'two', 'two']);
solve(['6', '3', 'one', 'two', 'two', 'one', 'one']);
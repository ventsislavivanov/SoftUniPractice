function solve(input) {
    let h = +input.shift();
    let w = +input.shift();
    let noPaintPercent = +input.shift();
    let index = 0
    let command = input[index++];

    let area = h * w * 4;
    area = area - area  * noPaintPercent / 100;
    let countPainting = 0;

    while (true) {
        countPainting++;
        if (command === 'Tired!') {
            console.log(`${area} quadratic m left.`);
            break;
        }
        let paint = Number(command);
        area -= paint;

        if (countPainting === input.length) {
            if (area < 0) {
                console.log(`All walls are painted and you have ${Math.abs(area)} l paint left!`);
            } else {
                console.log("All walls are painted! Great job, Pesho!" );
            }
            break;
        }

        command = input[index++];
    }
}

// solve(["3", "5", "10", "2", "3", "4", "Tired!"]);
// solve(["2", "3", "25", "6", "7", "8"]);

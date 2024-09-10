function solve(input) {
    let nPaintedEggs = Number(input.shift());

    let redCount = 0;
    let orangeCount = 0;
    let blueCount = 0;
    let greenCount = 0;
    let maxCount = Number.MIN_SAFE_INTEGER;
    let color = '';

    for (let i = 0; i < nPaintedEggs; i++) {
        let currentColor = input[i]
        switch (currentColor) {
            case 'red': redCount++; break;
            case 'orange': orangeCount++; break;
            case 'blue': blueCount++; break;
            case 'green': greenCount++; break;
        }

        if (maxCount < redCount) {
            maxCount = redCount;
            color = 'red';
        }
        if (maxCount < orangeCount) {
            maxCount = orangeCount;
            color = 'orange';
        }
        if (maxCount < blueCount) {
            maxCount = blueCount;
            color = 'blue';
        }
        if (maxCount < greenCount) {
            maxCount = greenCount;
            color = 'green';
        }
    }

    console.log(`Red eggs: ${redCount}`);
    console.log(`Orange eggs: ${orangeCount}`);
    console.log(`Blue eggs: ${blueCount}`);
    console.log(`Green eggs: ${greenCount}`);
    console.log(`Max eggs: ${maxCount} -> ${color}`);
}

solve(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
solve(["4", "blue", "red", "blue", "orange"]);

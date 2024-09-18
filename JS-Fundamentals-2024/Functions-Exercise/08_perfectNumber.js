function solve(num) {
    let sumProperDivisor = 0;
    for (let divisor = 1; divisor < num; divisor++) {
        if (num % divisor === 0) {
            sumProperDivisor += divisor;
        }
    }

    if (sumProperDivisor === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

solve(6);
solve(28);
solve(1236498);
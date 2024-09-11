function solve(num) {
    let divisors = [10, 7, 6, 3, 2];

    for (let i = 0; i < divisors.length; i++) {
        let divisor = divisors[i];

        if (divisor % 10 === 0) {
            console.log(`The number is divisible by ${divisor}`);
            return;
        }
    }

    console.log('Not divisible');
}

solve(30);
solve(15);
solve(12);
solve(1643);
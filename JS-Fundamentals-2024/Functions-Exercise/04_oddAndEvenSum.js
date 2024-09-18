function solve(number) {
    const numberString = number.toString();

    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numberString.length; i++) {
        const curr = Number(numberString[i]);
        if (curr % 2 === 0) {
            evenSum += curr;
        } else {
            oddSum += curr;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
console.log('-------------------')
solve(3495892137259234);
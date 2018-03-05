function negativePositiveNumbers(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let currentNumber = Number(input[i]);
        if (currentNumber >= 0) {
            result.push(currentNumber);
        } else {
            result.unshift(currentNumber);
        }
    }
    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9])
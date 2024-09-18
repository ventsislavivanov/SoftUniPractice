function solve(numOne, numTwo, operator) {
    const multiply = (numOne, numTwo) => numOne * numTwo;
    const divide = (numOne, numTwo) => numOne / numTwo;
    const add = (numOne, numTwo) => numOne + numTwo;
    const subtract = (numOne, numTwo) => numOne - numTwo;

    let result = 0;
    switch (operator) {
        case 'multiply':
            result = multiply(numOne, numTwo);
            break;
        case 'divide':
            result = divide(numOne, numTwo);
            break;
        case 'add':
            result = add(numOne, numTwo);
            break;
        case 'subtract':
            result = subtract(numOne, numTwo);
            break;
    }

    console.log(result)
}

solve(12, 19, 'add');
solve(40, 8, 'divide');
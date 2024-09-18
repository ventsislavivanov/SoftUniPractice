function solve(num1, num2) {
    function calcFactorial(num) {
        let factorial = 1;
        for (let multiply = 1; multiply <= num; multiply++) {
            factorial *= multiply;
        }

        return factorial;
    }

    const factorial1 = calcFactorial(num1);
    const factorial2 = calcFactorial(num2);

    console.log((factorial1 / factorial2).toFixed(2));
}

solve(5,2);
solve(6, 2);
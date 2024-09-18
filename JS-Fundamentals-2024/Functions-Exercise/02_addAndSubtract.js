function solve(num1, num2, num3) {
    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    const sumOneAndTwo = sum(num1, num2);
    const result = subtract(sumOneAndTwo, num3);

    console.log(result);
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);
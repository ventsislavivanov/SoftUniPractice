function sumOfNumbs(num1, num2) {
    const startNum = Math.min(Number(num1), Number(num2));
    const endNum = Math.max(Number(num1), Number(num2));
    let sum = 0;
    for (let index = startNum; index <= endNum; index++) {
        sum += index;
    }
    console.log(sum);
}
sumOfNumbs('1', '5');
sumOfNumbs('-8', '20');
//# sourceMappingURL=03_sumOfNumsNM.js.map
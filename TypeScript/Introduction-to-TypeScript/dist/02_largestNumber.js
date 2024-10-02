function largestNumber(num1, num2, num3) {
    const firtCompare = Math.max(num1, num2);
    const secondCompare = Math.max(firtCompare, num3);
    console.log(`The lagtest number is ${secondCompare}`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
//# sourceMappingURL=02_largestNumber.js.map
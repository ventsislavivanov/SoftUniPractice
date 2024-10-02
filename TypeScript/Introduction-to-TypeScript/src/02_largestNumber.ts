function largestNumber(num1:number, num2: number, num3:number) {
    const firtCompare = Math.max(num1, num2);
    const secondCompare = Math.max(firtCompare, num3);

    console.log(`The lagtest number is ${secondCompare}`);    
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
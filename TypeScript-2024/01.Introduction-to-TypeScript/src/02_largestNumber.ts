function largestNumber(num1:number, num2: number, num3:number) {
    const firstCompare = Math.max(num1, num2);
    const secondCompare = Math.max(firstCompare, num3);

    console.log(`The largest number is ${secondCompare}`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
function biggestOf3Number(array) {
    let num1 = array[0];
    let num2 = array[1];
    let num3 = array[2];

    let maxNum = Math.max(num1, num2, num3);

    console.log(maxNum);
}

biggestOf3Number([5, -2, 7]);
biggestOf3Number([130, 5, 99]);
biggestOf3Number([43, 43.1, 43.2]);
biggestOf3Number([-10, -20, -39]);
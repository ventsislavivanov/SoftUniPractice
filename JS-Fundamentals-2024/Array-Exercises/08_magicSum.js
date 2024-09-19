function solve(arr, number) {
    for (let i = 0; i <= arr.length; i++) {
        let curNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const secondNum = arr[j];
            if (curNum + secondNum === number) {
                console.log(curNum, secondNum);
            }
        }
    }
}

// solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
// solve([1, 2, 3, 4, 5, 6], 6);
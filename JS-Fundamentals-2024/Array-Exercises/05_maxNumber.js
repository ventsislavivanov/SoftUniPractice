function solve(arr) {
    let topNums = [];
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];

        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];
            if (currNum <= rightNum) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topNums.push(currNum);
        }
    }

    console.log(topNums.join(' '));
}

solve([14, 24, 3, 19, 15, 17]);

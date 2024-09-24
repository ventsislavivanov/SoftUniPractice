function solve(arr) {
    arr.sort((a,b) => a-b);

    let sortedArr = [];
    while (arr.length > 0) {
        const biggestNum = arr.pop();
        sortedArr.push(biggestNum)

        if (arr.length > 0) {
            const smallestNum = arr.shift();
            sortedArr.push(smallestNum);
        }
    }

    console.log(sortedArr.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
function solve(arr) {
    let longestSequence = [];
    let curSequence = [arr.shift()];


    for (const curNum of arr) {
        if (curNum === curSequence[0]) {
            curSequence.push(curNum);

            if (curSequence.length > longestSequence.length) {
                longestSequence = curSequence;
            }
        } else {
            curSequence = [curNum];
        }
    }

    console.log(longestSequence.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// solve([1, 1, 1, 2, 3, 1, 3, 3]);
// solve([4, 4, 4, 4]);
// solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
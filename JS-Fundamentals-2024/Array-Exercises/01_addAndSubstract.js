function solve(arr) {
    let newArr = [];
    let sumOriginal = 0;
    let sumNewArr = 0;

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        sumOriginal += el;

        if (el % 2 !== 0) {
            newArr[i] = el - i;
        } else {
            newArr[i] = el + i;
        }
    }

    for (const el of newArr) {
        sumNewArr += el;
    }

    console.log(newArr);
    console.log(sumOriginal);
    console.log(sumNewArr);
}

// solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2])
function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum)
}

solve([1,2,3,4,5,6])
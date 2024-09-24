function solve(sequence, nums) {
    const tookElements = nums.shift();
    const deleteElement = nums.shift();
    const searchElement = nums.shift();
    let count = 0;

    let arr = sequence.slice(0, tookElements);
    arr.splice(0, deleteElement);
    for (const num of arr) {
        if (num === searchElement) {
            count++;
        }
    }

    console.log(`Number ${searchElement} occurs ${count} times.`)
}

// solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
solve([7, 1, 5, 8, 2, 7], [3, 1, 5]);
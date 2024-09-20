function solve(arr) {
    const k = arr[0];
    const newArray = arr.slice(1);

    console.log(newArray.slice(0, k).join(' '));
    console.log(newArray.slice(-k).join(' '));
}

solve([2, 7, 8, 9]);
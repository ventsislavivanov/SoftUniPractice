function firstAndLastNumbers(arr) {
    let n = Number(arr.shift());
    console.log(arr.slice(0, n).join(' '));
    console.log(arr.slice(arr.length - n, arr.length).join(' '));
}

firstAndLastNumbers([2, 7, 8, 9]);
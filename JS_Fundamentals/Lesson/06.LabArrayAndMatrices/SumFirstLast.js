function sumFirstLast(input) {
    let l = input.length;
    let first = Number(input[0]);
    let last = Number(input[l - 1]);
    return first + last;
}

let output = [20, 30, 40];
console.log(sumFirstLast(output));
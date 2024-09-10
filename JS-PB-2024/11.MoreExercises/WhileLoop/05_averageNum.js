function solve(input) {
    let n = Number(input.shift());
    let index = 0;
    let sum = 0
    while(index !== n) {
        let inputElement = Number(input[index]);
        sum += inputElement;
        index++;
    }

    console.log((sum / n).toFixed(2));
}

solve(['4', '3', '2', '4', '2'])